'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-lg prose-primary"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By downloading, installing, or using the TaskAdventurer mobile application ("App"), 
                  you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these 
                  Terms, please do not use the App.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms apply to all users of the App, including parents, guardians, and children 
                  (collectively, "Users").
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TaskAdventurer is a family task management application that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Helps families organize and track daily tasks and chores</li>
                  <li>Provides gamified experiences to motivate children</li>
                  <li>Offers reward systems and progress tracking</li>
                  <li>Enables parent-child interaction through task management</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  The App is designed for family use and requires parental supervision and consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Creation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To use certain features of the App, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Parental Consent</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For children under 13 years of age, parental consent is required for account creation 
                  and data collection. Parents are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Providing consent for their child's use of the App</li>
                  <li>Supervising their child's activities</li>
                  <li>Managing their child's account settings and permissions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use the App only for lawful purposes and in accordance with these Terms. 
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Use the App for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the App's functionality</li>
                  <li>Share inappropriate content or engage in harmful behavior</li>
                  <li>Attempt to reverse engineer or modify the App</li>
                  <li>Use the App to harass, abuse, or harm others</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content and User-Generated Content</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Your Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You retain ownership of content you create within the App (such as custom tasks, 
                  rewards, and family information). By using the App, you grant us a license to use, 
                  store, and display this content to provide the service.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Content Standards</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content must be appropriate for family use and comply with our content guidelines. 
                  We reserve the right to remove content that violates these standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. Our collection and use of personal information is 
                  governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using the App, you consent to the collection and use of information as described 
                  in our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Subscription and Payments</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Premium Features</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TaskAdventurer offers both free and premium features. Premium features require a 
                  subscription and payment through the App Store or Google Play Store.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Payment Terms</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Payment processing is handled by third-party providers</li>
                  <li>Refunds are subject to App Store/Google Play Store policies</li>
                  <li>We reserve the right to modify pricing with notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The App and its content, including but not limited to text, graphics, images, 
                  software, and design, are owned by TaskAdventurer and protected by intellectual 
                  property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may not copy, modify, distribute, or create derivative works without our 
                  express written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Service Availability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to provide reliable service but cannot guarantee uninterrupted access. 
                  The App is provided "as is" without warranties of any kind.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, TaskAdventurer shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from your use of the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may terminate your account at any time by deleting the App or contacting us. 
                  We may terminate or suspend your account for violations of these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, your right to use the App ceases immediately, and we may delete 
                  your account data in accordance with our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms from time to time. We will notify you of significant 
                  changes through the App or by email. Continued use of the App after changes 
                  constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall 
                  be resolved in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about these Terms of Use, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> support@taskadventurer.com<br />
                    <strong>Address:</strong> TaskAdventurer Support Team<br />
                    <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 