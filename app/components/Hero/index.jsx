"use client"

import Reveal from "@/app/Reveal";
import { Download, Mail } from "lucide-react"
import Image from "next/image"


export default function Hero() {

  const handleDownLoadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv_nguyenhainam_reactnative.pdf'; // File cần đặt trong thư mục public
    link.download = 'cv_nguyenhainam_reactnative.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Reveal>
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Nguyễn Hải Nam</h1>
              <h2 className="text-2xl lg:text-3xl text-blue-600 font-semibold mb-6">Mobile Developer</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Trong 3 năm qua tôi đã làm việc ở một số công ty và đã có nhưng kinh nghiệm trong lĩnh vực lập trình mobile app. Tôi hy vọng sẽ
                đóng góp được một phần công sức của mình vào sự phát triển của công ty. Tôi sẽ cố gắng tích lũy thêm nhiều kinh nghiệm bằng
                cách sử dụng những kiến thức và kinh nghiệm tôi có để cùng các đồng nghiệp xây dựng 1 hệ thống. Môi trường làm việc mới với
                những người đồng nghiệp mới vừa là thách thức vừa là cơ hội để tôi cố gắng hơn trong việc hoàn thiện các kiến thức, kỹ năng
                chuyên môn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleDownLoadCV} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Download size={20} />
                  Xem CV
                </button>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Liên hệ
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/avatar.png"
                    alt="Nguyễn Hải Nam"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>
                {/* <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full">
                <span className="text-2xl">👨‍💻</span>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
