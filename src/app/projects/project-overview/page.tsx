import React from 'react';
import './projectoverview.scss';

const page = () => {
    return (
        <div className="mainContent">
            <div className="page-content">
                <div className="page-title">
                    <h4>Project Overview</h4>
                </div>

                <div className="dashboard">
                    <div className="col-lg-8">
                        <div className="dflex">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAC0FBMVEVHcEy/dfy+W/xjhfOco/lvk/bEcfyVqfmarPiNwfWNqPVN4/Nh3vWuZPmyYP1GKNS4Pv2HlPSHnvVy4vcz4vFtsPLOTPxU6fWYZPlmjPppfPynVPxP9PaBdfhVw/dGONcv7fGiT/2bLf2dOf3JP/06xvitIf0d4u6UOPwi9flQr+59e/tff/xPa/rFDP5JvvaqD/6kQfxmSNtrefNQZvqKPP0V9/m6PP5Dret4a/xahfuSP/xNdPtMjuJKo/tVaPGMhf0mpuHNJP7CJf1Ic95UmPtVN9WUNfsO//pIXNuQVftHQthdmvasL/1McPtjUd+iT/0ze99Hgeh3YP1hR+UQ5uc7hfq6L/2MNO4A//m2D/7BBf+7C/+cN/7GAf+qGv+cJv6YPP6iMP+vF/45gvuNSv6hIv+RRf6mHv+mKv+JUP6yE/+xHP8C/PkM7/kZxeSuIf9Lcfxybf0bwOR3Zf0F+PlSa/xFdvuAWv2QMf0/fPoP6/kdvOMwv/sXyeOVQP6+B/8hseM5fN6pJ/+EVf6VLf0euOKYKv42g+AJ8/glqeJsdP18X/yrJP4a3fmfM/43uPo8sPtne/wR2OUd2PoW4vqkLf9hgvxTQdtKnvw+cN4qneEVz+RBad0yjd9OTNxQR9xXOdtBqfsl0Pooy/qMNv4S5/ojruNcifsuleBEY94WzOVQmPxLUtwnpuE8dt8sxvsT1eUP3uUpoeJYj/wziOAh1PosmeER0eVGpPsO2uZJVtwN4+VGXt0gtOMvkeBZMNpIWtwaxudUlPyqBf6UGP5AaPw5jfuQIv0gXvkB4eSGLP5JYPs3XPssF8YwU9osfPs7Hs0ZmuAtb/pmbfyzA/4ayfo5Qtg7MtJMjPxae/wgcdsqZNuDG/wtsPscS/kcgt0L2vqgC/6ZUP9kMOBUH9gYCrsSK/sbgPQDveCBRv0SjuIQrOJ3Pe6rQf+1NP+u1fEUAAAAzXRSTlMAKVOYBYE8ChMfL24wHmT+iFZCRbVidk+NbsF5gEaI/pim77Ch2/Le28GgsM/b6rX/ya1e6/HdtdDg5szwweq2Z+i41tnbgrrs7b/bs+DKy7vl9Ozx9+vPv//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+6lkkcAAAEV1JREFUeNrsmttPU+kaxpG20AMwiiXIUYAQACFkRnC7BXVMnFFHt6MX7oQ7L7gFUkAIxwQTQHFiADQIFM/IURBGFBBlE0ML0KakJUWOwpW44Y/Y32EdvrVWaQsu2TXpEyczJoT85tfnfb9vLfDwcMcdd9xxxx133HHHHXfccccdd9z5/0URqApVqXzkPxCyXBWhjgVRhwb+KMiB6mvTdEZiI3x+AGQf9fT0KMgASMPIyMhQQ4TLlySURR4YGBlpaGgYGoo96NrMERgZe26AzP39/UNDKldmVrOakWWI3D+kdWnqCJa5YYTRrNVqu7+6bEMCpxnNdDMws1ZbXq5wUehr0wwzhdyPiLu7u8u/ql11cYziMtPMQ1gzZC4vd82CeA9MsxPYjyeQQS7PcU3VgdOcpTHEQYZxxTNGPU0js8xaxJyTA/7kfXXBtScfmabq3E94pjTn5eTlfY1xPeiAkYHtkAE0SGmp62295Gk+cjeDnIOYXa8fCvMoxazV2mYu3Up2NeigzVHBnsthqgGZS0urXK0flzdHmWqQlgnkqi0X64diamNguzbTzB++HnctaMnnDXDd19pYGnmYGORDRYVr9ePfU5buBq2NaiBkCP0BZCt87y4VYQ4FKWenprZGhQNYWkp7BsgVFVtn9gw6WKc74OBLLm1YQKk5Nw2yGh+qIHJFRfvWnj2ap+t0Rn/7n4V+1jI1ldNgY89RljFz+1bCXkHLjBpdurfdI3xDD/qxMUAxc3YGgdxeU1PjvVfUiTqNMcjeF/w2q9cD1VUDvDZzNUNoc8CeTWKSRpdodwwzM/WZU58t/VrhniORa9rNe7eqIbXSzpKeBcygIGBXd+dxlga3GjU1vb1m5R5SGzmqFZcl5JIGpjP1iLq/fHvNkLnXvHer2sM70XiU+Fu6xcJuwQDIDLEhtbacb5lhBsi9f5u/16r2tu2aPWL8dYU6GfO3EzQ0oP6yUV5eZWMAETFgBtTij6J3YET8sfPH4iNU/GNAmmQgoQsZaH9LcSYVMI1fpnLKCWayGb1/w4g/iqHnM2CyMrKybqj52IYk5nlQo9Mxpb5kKS6msfV6SJ1j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"
                                alt=""
                                className="avatar-sm me-4"
                            />

                            <div className="uidetails">
                                <h5>Skote Dashboard UI</h5>
                                <p>
                                    Separate existence is a myth. For science,
                                    music, sport, etc.
                                </p>
                            </div>
                        </div>
                        <h5 className="projectdetails">Project Details :</h5>
                        <div className="card">
                            Project Details : To an English person, it will seem
                            like simplified English, as a skeptical Cambridge
                            friend of mine told me what Occidental is. The
                            European languages are members of the same family.
                            Their separate existence is a myth. For science,
                            music, sport, etc,
                        </div>
                    </div>
                    <div className="col-lg-4">Team Members</div>
                </div>
            </div>
        </div>
    );
};

export default page;
