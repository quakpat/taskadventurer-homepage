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
            className="max-w-4xl mx-auto prose prose-lg"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the TaskAdventurer mobile application ("App"), 
                you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these 
                Terms, please do not use the App.
              </p>
              <p>
                These Terms apply to all users of the App, including parents, guardians, and children 
                (collectively, "Users").
              </p>

              <h2>2. Description of Service</h2>
              <p>TaskAdventurer is a family task management application that:</p>
              <ul>
                <li>Helps families organize and track daily tasks and chores</li>
                <li>Provides gamified experiences to motivate children</li>
                <li>Offers reward systems and progress tracking</li>
                <li>Enables parent-child interaction through task management</li>
              </ul>
              <p>The App is designed for family use and requires parental supervision and consent.</p>

              <h2>3. User Accounts and Registration</h2>
              <h3>3.1 Account Creation</h3>
              <p>To use certain features of the App, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3>3.2 Parental Consent</h3>
              <p>
                For children under 13 years of age, parental consent is required for account creation 
                and data collection. Parents are responsible for:
              </p>
              <ul>
                <li>Providing consent for their child's use of the App</li>
                <li>Supervising their child's activities</li>
                <li>Managing their child's account settings and permissions</li>
              </ul>

              <h2>4. Acceptable Use</h2>
              <p>
                You agree to use the App only for lawful purposes and in accordance with these Terms. 
                You agree not to:
              </p>
              <ul>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the App's functionality</li>
                <li>Share inappropriate content or engage in harmful behavior</li>
                <li>Attempt to reverse engineer or modify the App</li>
                <li>Use the App to harass, abuse, or harm others</li>
              </ul>

              <h2>5. Content and User-Generated Content</h2>
              <h3>5.1 Your Content</h3>
              <p>
                You retain ownership of content you create within the App (such as custom tasks, 
                rewards, and family information). By using the App, you grant us a license to use, 
                store, and display this content to provide the service.
              </p>

              <h3>5.2 Content Standards</h3>
              <p>
                All content must be appropriate for family use and comply with our content guidelines. 
                We reserve the right to remove content that violates these standards.
              </p>

              <h2>6. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is 
                governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p>
                By using the App, you consent to the collection and use of information as described 
                in our Privacy Policy.
              </p>

              <h2>7. Subscription and Payments</h2>
              <h3>7.1 Premium Features</h3>
              <p>
                TaskAdventurer offers both free and premium features. Premium features require a 
                subscription and payment through the App Store or Google Play Store.
              </p>

              <h3>7.2 Payment Terms</h3>
              <ul>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Payment processing is handled by third-party providers</li>
                <li>Refunds are subject to App Store/Google Play Store policies</li>
                <li>We reserve the right to modify pricing with notice</li>
              </ul>

              <h2>8. Intellectual Property</h2>
              <p>
                The App and its content, including but not limited to text, graphics, images, 
                software, and design, are owned by TaskAdventurer and protected by intellectual 
                property laws.
              </p>
              <p>
                You may not copy, modify, distribute, or create derivative works without our 
                express written consent.
              </p>

              <h2>9. Disclaimers and Limitations</h2>
              <h3>9.1 Service Availability</h3>
              <p>
                We strive to provide reliable service but cannot guarantee uninterrupted access. 
                The App is provided "as is" without warranties of any kind.
              </p>

              <h3>9.2 Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, TaskAdventurer shall not be liable for 
                any indirect, incidental, special, or consequential damages arising from your 
                use of the App.
              </p>

              <h2>10. Termination</h2>
              <p>
                You may terminate your account at any time by deleting the App or contacting us. 
                We may terminate or suspend your account for violations of these Terms.
              </p>
              <p>
                Upon termination, your right to use the App ceases immediately, and we may delete 
                your account data in accordance with our Privacy Policy.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of significant 
                changes through the App or by email. Continued use of the App after changes 
                constitutes acceptance of the new Terms.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in which TaskAdventurer 
                operates. Any disputes shall be resolved in the appropriate courts.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                If you have questions about these Terms of Use, please contact us:
              </p>
              <p>
                <strong>Email:</strong> support@mail.taskadventurer.com<br />
                <strong>Address:</strong> TaskAdventurer Support Team<br />
                <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 