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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
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
                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-11 rounded-md border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent text-white"
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
            <Card className="rounded-lg text-card-foreground group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
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
                <CardTitle className="font-semibold tracking-tight text-2xl mb-3 group-hover:text-blue-600 transition-colors">
                  IT Consulting
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  Strategic IT guidance to align technology with your business objectives and maximize ROI.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-lg text-card-foreground group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
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
                <CardTitle className="font-semibold tracking-tight text-2xl mb-3 group-hover:text-purple-600 transition-colors">
                  Outsourced Fintech Solutions
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  Specialized financial technology solutions to streamline your operations and enhance security.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-lg text-card-foreground group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
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
                <CardTitle className="font-semibold tracking-tight text-2xl mb-3 group-hover:text-green-600 transition-colors">
                  Data Analytics & BI
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  Transform your data into actionable insights for better decision making and business growth.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-lg text-card-foreground group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
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
                <CardTitle className="font-semibold tracking-tight text-2xl mb-3 group-hover:text-orange-600 transition-colors">
                  Digital Transformation
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  Modernize your business processes with cutting-edge digital solutions and automation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-lg text-card-foreground group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
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
                <CardTitle className="font-semibold tracking-tight text-2xl mb-3 group-hover:text-red-600 transition-colors">
                  IT Strategy Development
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive IT roadmaps aligned with your business growth plans and objectives.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-lg text-card-foreground group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
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
                <CardTitle className="font-semibold tracking-tight text-2xl mb-3 group-hover:text-indigo-600 transition-colors">
                  Custom Development
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how Summerville Group can help you harness the power of technology to drive innovation and
                achieve your goals.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Email</h4>
                    <p className="text-gray-300">summerville@gulfwww.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Phone</h4>
                    <p className="text-gray-300">+971 4 3464500</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Fax className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Fax</h4>
                    <p className="text-gray-300">+971 4 3464200</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Address</h4>
                    <p className="text-gray-300">P.O. Box 9546</p>
                    <p className="text-gray-300">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
              {/* Location Map */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6">Our Location</h4>
                <div className="relative h-80 bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6174665949!2d55.04827!3d25.0657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1643723400000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-300 text-sm">Located in Dubai, United Arab Emirates</p>
                </div>
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
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Summerville Group</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-4">Empowering businesses with comprehensive IT solutions</p>
            <p className="text-gray-400 text-sm">© 2025 Summerville Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
