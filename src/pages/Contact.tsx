import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Church Street', 'Community City, CC 12345'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main Office: (555) 123-4567', 'Prayer Line: (555) 123-PRAY'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@gracecommunity.org', 'pastor@gracecommunity.org'],
      action: 'Send Email'
    }
  ];

  const officeHours = [
    { day: 'Monday - Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Saturday', hours: 'By Appointment' },
    { day: 'Sunday', hours: '7:00 AM - 1:00 PM' }
  ];

  const departments = [
    {
      name: 'Senior Pastor',
      contact: 'Pastor Michael Johnson',
      email: 'pastor.michael@gracecommunity.org',
      phone: '(555) 123-4567',
      description: 'General inquiries, pastoral care, spiritual guidance'
    },
    {
      name: 'Youth Ministry',
      contact: 'Pastor David Chen',
      email: 'youth@gracecommunity.org',
      phone: '(555) 123-4569',
      description: 'Youth programs, teenage ministry, youth events'
    },
    {
      name: 'Women\'s Ministry',
      contact: 'Pastor Sarah Williams',
      email: 'women@gracecommunity.org',
      phone: '(555) 123-4568',
      description: 'Women\'s programs, life groups, ladies events'
    },
    {
      name: 'Administration',
      contact: 'Church Office',
      email: 'admin@gracecommunity.org',
      phone: '(555) 123-4567',
      description: 'Facility rentals, general information, volunteer coordination'
    }
  ];

  return (
    <div className="min-h-screen py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 slide-up">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            We'd love to hear from you! Whether you have questions about our church, 
            need prayer, or want to get involved, we're here to connect with you.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className={`church-card-gradient border-0 hover-lift fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent-light w-fit">
                  <info.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground">{detail}</p>
                  ))}
                </div>
                <Button className="w-full church-gold-gradient hover:opacity-90 transition-opacity">
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form and Office Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="church-card-gradient border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Your last name" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" placeholder="What is this regarding?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you..." 
                  rows={5}
                  required 
                />
              </div>
              
              <Button className="w-full church-gold-gradient hover:opacity-90 transition-opacity" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                * Required fields. We'll respond within 24-48 hours.
              </p>
            </CardContent>
          </Card>

          {/* Office Hours and Additional Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <Card className="church-card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl text-primary">
                  <Clock className="h-5 w-5" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent-light rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    <strong>Emergency Contact:</strong> For urgent pastoral care needs outside 
                    office hours, please call our emergency line at (555) 123-HELP.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card className="church-card-gradient border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-foreground">Grace Community Church</p>
                  <p className="text-muted-foreground">123 Church Street</p>
                  <p className="text-muted-foreground">Community City, CC 12345</p>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full hover-gold">
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={dept.name}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{dept.name}</CardTitle>
                  <CardDescription>{dept.contact}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground leading-relaxed">
                    {dept.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{dept.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{dept.phone}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full hover-gold">
                    Contact {dept.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <Card className="church-card-gradient border-0 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">What should I expect on my first visit?</h4>
                    <p className="text-sm text-muted-foreground">
                      Come as you are! Our greeters will welcome you, help you find seating, 
                      and answer any questions you might have.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">What is the dress code?</h4>
                    <p className="text-sm text-muted-foreground">
                      We don't have a specific dress code. People dress in everything from 
                      casual to business attire. Come comfortable!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Do you have programs for children?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We have nursery care and children's programs during our worship 
                      services for ages 0-12.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">How can I get involved?</h4>
                    <p className="text-sm text-muted-foreground">
                      There are many ways to get involved! Join a cell group, volunteer for 
                      a ministry, or speak with our connection team.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Do you offer counseling services?</h4>
                    <p className="text-sm text-muted-foreground">
                      Our pastoral team provides spiritual guidance and can refer you to 
                      professional Christian counselors when needed.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">How can I request prayer?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can submit prayer requests through our website, call our prayer 
                      line, or speak with any member of our prayer team.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="church-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                We Can't Wait to Meet You!
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for a church home, need prayer, or just want to learn 
                more about what we believe, we're here for you. Don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="church-gold-gradient hover:opacity-90 transition-opacity">
                  Plan Your Visit
                </Button>
                <Button size="lg" variant="outline" className="hover-gold">
                  Request Prayer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;