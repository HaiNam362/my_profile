import { User, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Giới thiệu bản thân</h2>
          <p className="text-xl text-gray-600">Tìm hiểu thêm về tôi</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-blue-50">
            <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <User size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Về tôi</h3>
            <p className="text-gray-600">
              Tôi là một Mobile Developer đam mê tạo ra những ứng dụng di động chất lượng cao. Với kinh nghiệm 3+ năm
              trong lĩnh vực phát triển phần mềm, tôi chuyên về React Native và Flutter.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-green-50">
            <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Kinh nghiệm</h3>
            <p className="text-gray-600">
              3+ năm kinh nghiệm phát triển ứng dụng di động, chuyên về React Native, Flutter, và các công nghệ backend
              như Node.js. Đã tham gia nhiều dự án từ startup đến doanh nghiệp lớn.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-purple-50">
            <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Kỹ năng mềm</h3>
            <p className="text-gray-600">
              Làm việc nhóm hiệu quả, khả năng giải quyết vấn đề tốt, giao tiếp rõ ràng, học hỏi nhanh chóng và thích
              ứng với môi trường làm việc đa dạng.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
