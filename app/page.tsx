"use client"

import {
  ArrowRight,
  BarChart3,
  Brain,
  Code,
  Database,
  Shield,
  Zap,
  Mail,
  Phone,
  VoicemailIcon as Fax,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80 // Approximate header height
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Custom Summerville Logo Component with new SVG
const SummervilleLogo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <div
    className={`bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg ${className}`}
  >
    <svg className="h-8 w-8 text-white" viewBox="0 0 256 279" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_14279)">
        <path
          d="M126.814 0.0020595C153.513 -0.228081 176.476 18.8538 181.134 45.1437C206.243 35.5886 234.572 45.7098 247.942 69.0121L247.966 69.0596L248.215 69.5346C261.11 92.4853 255.943 121.354 235.889 138.408C256.669 155.492 262.075 185.083 248.678 208.41L248.588 208.566C248.524 208.668 248.455 208.767 248.381 208.861C235.106 231.584 207.491 241.577 182.749 232.611C178.706 259.111 156.031 278.761 129.225 278.996C102.42 279.227 79.406 259.975 74.9026 233.549C50.5533 242.813 23.1758 233.574 9.35029 211.753L9.25 211.592L9.65062 212.258L8.08314 209.705C7.98832 209.549 7.90498 209.386 7.83377 209.218C-5.07359 186.271 0.0890827 157.396 20.1479 140.344C-0.681484 123.264 -6.09274 93.6202 7.35878 70.2827L7.4485 70.1287C7.51183 70.0267 7.58044 69.9264 7.64378 69.8314C20.9524 47.1419 48.5422 37.1601 73.2876 46.0819C77.4884 19.7149 100.116 0.236394 126.814 0.0020595ZM127.116 9.56657C102.85 9.65871 83.2537 29.4043 83.3455 53.6698C83.4113 54.6831 83.1934 55.6947 82.7162 56.591C82.046 57.8515 80.9014 58.7931 79.5354 59.2076C78.1693 59.622 76.6945 59.4753 75.4369 58.7998L74.812 58.4723C54.141 47.8467 28.7001 55.169 16.8705 75.2701C16.8063 75.4121 16.7349 75.5508 16.6567 75.6857L16.3043 76.3091C4.85858 96.9374 11.6409 122.992 31.809 135.392C32.6947 135.837 33.439 136.519 33.9583 137.363C35.5253 139.897 34.7568 143.22 32.2365 144.809L30.986 145.617L30.4664 145.974C12.0988 158.781 6.15127 183.436 16.8628 203.268L17.203 203.886C17.2968 204.016 17.384 204.151 17.4642 204.29L17.8252 204.906C29.8776 225.122 55.7886 232.279 76.5413 220.997C78.1675 219.929 80.2446 219.824 81.97 220.724C83.6953 221.624 84.7987 223.387 84.8536 225.332L84.9249 227.184L84.8299 225.332C84.8893 241.029 93.3184 255.502 106.942 263.299C120.566 271.096 137.315 271.033 150.879 263.133C164.443 255.233 172.763 240.696 172.703 224.999C172.566 223.045 173.502 221.17 175.147 220.106C176.792 219.041 178.885 218.955 180.612 219.881L181.236 220.208C201.893 230.806 227.299 223.493 239.131 203.423L239.345 202.995H239.368C251.298 182.29 244.601 155.852 224.252 143.324C222.512 142.438 221.382 140.685 221.294 138.735C221.205 136.784 222.172 134.936 223.824 133.896H223.836C243.8 121.354 250.422 95.3606 238.893 74.7951C238.803 74.669 238.72 74.5381 238.644 74.4032L238.284 73.786C226.247 53.5482 200.313 46.3906 179.567 57.7073C178.739 58.2506 177.778 58.5585 176.788 58.5979C173.808 58.6912 171.316 56.3529 171.219 53.373V53.3373C171.127 29.0718 151.382 9.47507 127.116 9.56657ZM92.8535 151.583C95.5722 146.235 102.001 143.951 107.485 146.384C112.969 148.817 115.589 155.117 113.448 160.721C111.536 164.806 111.429 167.217 112.724 170.09L122.556 191.025C124.48 195.241 128.648 196.666 132.056 197.497H132.044C142.743 200.075 150.473 209.382 151.043 220.373C151.613 231.363 144.887 241.42 134.512 245.091C124.137 248.761 112.583 245.172 106.115 236.268C99.6464 227.364 99.8036 215.267 106.501 206.534C109.244 202.948 110.064 200.442 109.019 195.942L103.746 173.308C103.022 170.387 101.526 168.927 97.2747 166.468C92.0774 163.472 90.1348 156.931 92.8535 151.583ZM96.8549 115.734C102.879 115.422 108.091 119.885 108.71 125.886C109.328 131.886 105.136 137.319 99.1746 138.242C94.686 138.61 92.5485 139.726 90.696 142.291L77.5269 161.291C74.8551 165.067 75.6982 169.402 76.6957 172.774C79.8102 183.374 75.5788 194.759 66.2978 200.753C57.0167 206.746 44.8984 205.918 36.5187 198.718C28.139 191.518 25.4956 179.663 30.0228 169.585C34.55 159.507 45.1686 153.61 56.1166 155.092C60.5934 155.686 63.1703 155.152 66.5308 151.993L83.4405 136.093C85.6136 134.003 86.1124 131.972 86.1124 127.056C86.1075 121.024 90.8307 116.046 96.8549 115.734ZM181.063 161.79C186.822 155.681 195.284 152.905 203.542 154.416C215.303 156.539 223.903 166.708 224.046 178.658C224.189 190.608 215.833 200.979 204.126 203.383C192.42 205.787 180.654 199.547 176.076 188.508C174.354 184.316 172.608 182.357 168.191 181.015L146.033 174.282C143.135 173.451 141.14 174.021 136.901 176.479C134.591 177.829 131.873 178.305 129.242 177.821C123.245 176.559 119.338 170.758 120.424 164.727C121.51 158.696 127.195 154.622 133.255 155.532C135.919 156.007 138.32 157.434 140.012 159.545C142.577 163.262 144.619 164.568 147.731 164.865L170.732 166.801C175.328 167.24 178.688 164.331 181.063 161.79ZM179.881 77.8249C187.664 68.9966 200.589 66.8027 210.865 72.6177C221.258 78.4995 226.022 90.9242 222.226 102.247C218.43 113.57 207.139 120.612 195.301 119.041C190.836 118.435 188.259 118.981 184.899 122.14L168.013 138.028C165.84 140.13 165.341 142.149 165.341 147.077C165.346 152.083 162.059 156.496 157.261 157.924C152.463 159.352 147.297 157.454 144.565 153.26C141.832 149.066 142.183 143.574 145.427 139.762C147.169 137.688 149.603 136.313 152.279 135.891C156.779 135.523 158.917 134.407 160.734 131.842L173.891 112.842C176.574 109.054 175.719 104.731 174.734 101.347C172.34 93.2809 174.175 84.5514 179.614 78.1319L179.881 77.8249ZM125.192 27.3909C134.716 27.3847 143.412 32.8036 147.602 41.3559C151.792 49.9083 150.746 60.1006 144.904 67.6227C142.197 71.1852 141.342 73.6907 142.446 78.2506L147.719 100.813C148.443 103.746 149.939 105.206 154.179 107.653C159.376 110.647 161.322 117.185 158.606 122.534C155.891 127.883 149.465 130.171 143.98 127.743C138.495 125.314 135.87 119.018 138.005 113.412C139.917 109.327 140.036 106.905 138.73 104.043L128.909 83.0956C126.973 78.88 122.817 77.455 119.409 76.6357L119.362 76.6594C108.649 74.05 100.911 64.7291 100.317 53.7187C99.7234 42.7083 106.414 32.6095 116.785 28.8634C119.48 27.8856 122.325 27.3872 125.192 27.3909ZM47.3232 70.7481C59.0315 68.3426 70.8 74.5833 75.3776 85.6249C77.0994 89.8048 78.8569 91.776 83.2624 93.1179L105.433 99.8509C108.318 100.682 110.325 100.1 114.564 97.6422C119.78 94.6248 126.445 96.2186 129.732 101.269C133.019 106.32 131.777 113.059 126.905 116.606C122.034 120.153 115.239 119.266 111.441 114.587C108.876 110.871 106.846 109.564 103.723 109.268L80.7331 107.332C76.1375 106.893 72.777 109.79 70.402 112.343C64.6368 118.442 56.1808 121.216 47.923 119.717C36.1593 117.599 27.5529 107.432 27.4065 95.4804C27.2601 83.5284 35.6149 73.1535 47.3232 70.7481Z"
          fill="#ffffff"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2_14279">
          <rect width="256" height="279" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SummervilleLogo />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Summerville Group Ltd</h1>
                <p className="text-xs text-gray-500 font-medium">IT Solutions & Innovation</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-Vf26rNVMedEB8g7Wu6JcfV0cliSZzv.png)",
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Businesses Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 animate-pulse">
                {" "}
                Technology
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solution services that harness the power of technology to drive innovation, creativity,
              and productivity for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent text-white hover:text-blue-600"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Summerville Group</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We specialize in delivering tailored IT consulting services, including outsourced fintech solutions,
                  to help organizations overcome complex technological challenges and achieve their goals.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With a focus on creativity, productivity, and digital transformation, our team of experts collaborates
                  with clients to design and implement effective IT strategies, ensuring seamless integration and
                  optimal results.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-jnmf4c8VTXWOBCbC5wJ0ZKYE4M8Ftz.webp"
                  alt="Innovation and Technology"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0070ba] to-[#1a7bc4] rounded-2xl opacity-20"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="h-20 w-20 bg-gradient-to-br from-[#0070ba]/10 to-[#0070ba]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Driving technological innovation to keep your business ahead of the curve with cutting-edge solutions.
                </p>
              </div>
              <div className="text-center group">
                <div className="h-20 w-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h4>
                <p className="text-gray-600 leading-relaxed">
                  Deep technical expertise across multiple domains and technologies with proven industry experience.
                </p>
              </div>
              <div className="text-center group">
                <div className="h-20 w-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h4>
                <p className="text-gray-600 leading-relaxed">
                  Trusted solutions with seamless integration, optimal results, and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-[#0070ba]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Core Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IT%20Consulting.jpg-JrxGBQb0Brba6gJETmLxgJ2PqhozTq.jpeg"
                    alt="IT Consulting"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="absolute -bottom-4 left-4 h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-blue-600 transition-colors">
                  IT Consulting
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Strategic IT guidance to align technology with your business objectives and maximize ROI.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Outsourced%20Fintech%20Solutions-cStlpe5kKS0uH4OUgpGc2cHkuS4lYS.webp"
                    alt="Fintech Solutions"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="absolute -bottom-4 left-4 h-16 w-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-purple-600 transition-colors">
                  Outsourced Fintech Solutions
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Specialized financial technology solutions to streamline your operations and enhance security.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Data%20Analytics%20%26%20BI-bwcJPXga8cDnGp89Dw1M7YqzrRSruc.png"
                    alt="Data Analytics"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="absolute -bottom-4 left-4 h-16 w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-green-600 transition-colors">
                  Data Analytics & BI
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Transform your data into actionable insights for better decision making and business growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital%20Transformation-ndOmUdcfMNGlgj4rZDIbXId75Wr8wu.webp"
                    alt="Digital Transformation"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="absolute -bottom-4 left-4 h-16 w-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-orange-600 transition-colors">
                  Digital Transformation
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Modernize your business processes with cutting-edge digital solutions and automation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IT%20Strategy%20Development-UpwkLyiG7j3nfVw9aLxEO8c5lcAgRs.webp"
                    alt="IT Strategy"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="absolute -bottom-4 left-4 h-16 w-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-red-600 transition-colors">
                  IT Strategy Development
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Comprehensive IT roadmaps aligned with your business growth plans and objectives.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Custom%20Development-VppXTLiJ9xQBhpCcZ6jXYLAsAOHOAg.png"
                    alt="Custom Development"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="absolute -bottom-4 left-4 h-16 w-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-indigo-600 transition-colors">
                  Custom Development
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Tailored technology solutions designed and implemented for your specific business needs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Summerville Group?</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">Positioned at the forefront of a rapidly growing market</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0070ba]/10 to-[#0070ba]/5 rounded-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-6">Market Leadership</h4>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      The demand for IT solution services is growing significantly as businesses increasingly rely on
                      technology to drive creativity, productivity, and innovation. With the rise of remote work,
                      digital transformation projects, and fintech adoption, we're positioned to meet this expanding
                      need.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium">Growing market demand for IT solutions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium">Expertise in emerging fintech solutions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-gradient-to-r from-green-600 to-green-700 rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium">
                          Proven track record of successful implementations
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                        IT
                      </div>
                      <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-gray-600 mt-6 text-lg">
                      Bridging the gap between business needs and technological solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how Summerville Group can help you harness the power of technology to drive innovation and
                achieve your goals.
              </p>
            </div>

            {/* Get In Touch Section */}
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold mb-6">Get In Touch</h4>
              <p className="text-gray-300 text-lg mb-12">
                We're here to help you succeed. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Email</h5>
                <p className="text-gray-300 text-sm mb-2">info@summervillegroup.com</p>
                <p className="text-xs text-gray-400">We'll respond within 24 hours</p>
              </div>

              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Email</h5>
                <p className="text-gray-300 text-sm mb-2">summerville@gulfwww.com</p>
                <p className="text-xs text-gray-400">Alternative contact email</p>
              </div>

              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Phone</h5>
                <p className="text-gray-300 text-sm mb-2">+971 4 3464500</p>
                <p className="text-xs text-gray-400">Mon-Fri, 9AM-6PM GST</p>
              </div>

              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Fax className="h-8 w-8 text-white" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Fax</h5>
                <p className="text-gray-300 text-sm mb-2">+971 4 3464200</p>
                <p className="text-xs text-gray-400">For official documents</p>
              </div>

              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Address</h5>
                <p className="text-gray-300 text-sm">P.O. Box 9546</p>
                <p className="text-gray-300 text-sm">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <SummervilleLogo />
              <div>
                <span className="text-2xl font-bold text-white">Summerville Group Ltd</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-4">Empowering businesses with comprehensive IT solutions</p>
            <p className="text-gray-400 text-sm">© 2025 Summerville Group Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
