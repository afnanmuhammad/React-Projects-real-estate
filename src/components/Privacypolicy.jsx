import React from "react";

const Privacypolicy = ({ onClose }) => {
    return (
        <div className="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500 text-gray-00 py-16 px-6 md:px-20 lg:px-32 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
            <p className="mb-4">
                At <strong>RealEstatePro</strong>, we value your privacy. This Privacy Policy
                explains how we collect, use, and protect your personal information when
                you use our website or services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
            <p className="mb-4">
                We may collect personal details such as your name, email address, and
                message when you submit a contact form or subscribe to our newsletter.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
            <p className="mb-4">
                We use your data only to respond to your inquiries, improve our services,
                and send updates or newsletters (if you’ve opted in).
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Data Protection</h2>
            <p className="mb-4">
                We take appropriate measures to keep your information safe and do not
                share it with third parties without your consent.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
            <p>
                If you have any questions about our Privacy Policy, please contact us at{" "}
                <a href="mailto:info@realestatepro.com" className="text-white underline">
                    info@realestatepro.com
                </a>.
            </p>

            {/* ✅ Add this Back Button */}
            <button
                onClick={onClose}
                className="mt-10 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition"
            >
                Back to Home
            </button>
        </div>
    );
};

export default Privacypolicy;
