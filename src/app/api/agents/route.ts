import { NextResponse } from 'next/server';

import { Prisma, PrismaClient } from '@prisma/client';
import { join } from 'path';
import { writeFile, mkdir, stat } from 'fs/promises';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const formData = await request.formData();
  const image: File | null = formData.get('image') as unknown as File;

  if (image) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), '/public/uploads');

    try {
      await stat(uploadDir);
    } catch (e: any) {
      if (e.code === 'ENOENT') {
        await mkdir(uploadDir, { recursive: true });
      } else {
        console.error(
          'Error while trying to create directory when uploading a file\n',
          e
        );
        return NextResponse.json(
          { error: 'Something went wrong.' },
          { status: 500 }
        );
      }
    }
    try {
      const filename = Date.now().toString() + image.name.replace(/ /g, '_');
      await writeFile(`${uploadDir}/${filename}`, buffer);
      if (!image) {
        formData.set('image', ``);
      } else {
        formData.set('image', `/public/uploads/${filename}`);
      }
    } catch (e) {
      console.error('Error while trying to upload a file\n', e);
      return NextResponse.json(
        { error: 'Something went wrong.' },
        { status: 500 }
      );
    }
  }
  let body = Object.fromEntries(formData) as {
    [k: string]: string;
  };
  try {
    const newAgent = await prisma.aGENT.create({
      data: {
        name: body.name,
        email: body.email,
        type: body.type === 'HUMAN' ? 'HUMAN' : 'BOT',
        image: body.image,
        skills: body.skills
      }
    });
    return NextResponse.json({ newAgent });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return NextResponse.json(
          {
            error:
              'There is a unique constraint violation, a new user cannot be created with this email'
          },
          { status: 500 }
        );
      }
    }
  }
}
