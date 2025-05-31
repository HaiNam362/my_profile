"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                alert("Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus('error');
                alert("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            alert("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Liên hệ</h2>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-8">Thông tin liên hệ</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 text-white p-3 rounded-full">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-gray-600">nguyenhainam362@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-green-600 text-white p-3 rounded-full">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Điện thoại</h4>
                                    <p className="text-gray-600">0972250362</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-red-600 text-white p-3 rounded-full">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Địa chỉ</h4>
                                    <p className="text-gray-600">Triều Khúc, Thanh Xuân, Hà Nội</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="font-semibold mb-4">Mạng xã hội</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/HaiNam362"
                                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/h%E1%BA%A3i-nam-nguy%E1%BB%85n-923080216/"
                                    className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-8">Gửi tin nhắn</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Nhập họ và tên của bạn"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Nhập email của bạn"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Chủ đề
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Chủ đề tin nhắn"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Tin nhắn
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Nội dung tin nhắn..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Gửi tin nhắn
                            </button>
                        </form>
                        {status === 'success' && (
                            <p className="mt-4 text-green-600">Tin nhắn đã được gửi thành công!</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-600">Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}