'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mb-4 prose-h3:text-xl prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-gray-700 prose-ul:space-y-2 prose-li:mb-1">
              <h2>1. Introduction</h2>
              <p>
                TaskAdventurer ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our mobile application and related services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <ul>
                <li>Email address (for account creation and communication)</li>
                <li>Name and profile information</li>
                <li>Children's names and ages (for personalized experiences)</li>
                <li>Parent/guardian contact information</li>
              </ul>

              <h3>2.2 Usage Information</h3>
              <ul>
                <li>Task completion data and progress tracking</li>
                <li>App usage patterns and preferences</li>
                <li>Reward redemption history</li>
                <li>Adventurer progression and leveling data</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>Provide and maintain the TaskAdventurer service</li>
                <li>Personalize the experience for each family member</li>
                <li>Track progress and provide rewards</li>
                <li>Send important updates and notifications</li>
                <li>Improve our app and develop new features</li>
                <li>Ensure the security and safety of our users</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except in the following circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in operating our app</li>
              </ul>

              <h2>5. Children's Privacy</h2>
              <p>
                TaskAdventurer is designed for families and takes children's privacy seriously:
              </p>
              <ul>
                <li>We collect minimal information about children</li>
                <li>All data collection is done with parental consent</li>
                <li>Parents have full control over their children's accounts</li>
                <li>We do not knowingly collect personal information from children under 13 without parental consent</li>
              </ul>

              <h2>6. Data Security</h2>
              <p>We implement appropriate security measures to protect your information:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage practices</li>
              </ul>

              <h2>7. Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li>Access and review your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>

              <h2>8. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed 
                to provide services. You may request deletion of your account at any time, and 
                we will delete your personal information within 30 days of your request.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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