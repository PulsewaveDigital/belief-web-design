import { MapPin, Users, Calendar, Heart, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Cells = () => {
  const cellGroups = [
    {
      name: 'Downtown Cell',
      leader: 'John & Mary Smith',
      location: 'Downtown Community Center',
      day: 'Wednesday',
      time: '7:00 PM',
      focus: 'Young Professionals',
      members: 12,
      contact: 'john.smith@example.com'
    },
    {
      name: 'Westside Families',
      leader: 'Pastor David Chen',
      location: 'Westside Elementary School',
      day: 'Thursday',
      time: '6:30 PM',
      focus: 'Families with Children',
      members: 18,
      contact: 'david.chen@gracecommunity.org'
    },
    {
      name: 'Seniors Fellowship',
      leader: 'Elder Robert Johnson',
      location: 'Grace Community Church',
      day: 'Tuesday',
      time: '2:00 PM',
      focus: 'Senior Adults',
      members: 15,
      contact: 'robert.johnson@example.com'
    },
    {
      name: 'College & Career',
      leader: 'Sarah Williams',
      location: 'University District',
      day: 'Friday',
      time: '7:30 PM',
      focus: 'Students & Young Adults',
      members: 20,
      contact: 'sarah.williams@example.com'
    },
    {
      name: 'East Side Connect',
      leader: 'Michael & Jennifer Davis',
      location: 'East Side Community Hall',
      day: 'Sunday',
      time: '6:00 PM',
      focus: 'Mixed Ages',
      members: 14,
      contact: 'michael.davis@example.com'
    },
    {
      name: 'Spanish Speaking Cell',
      leader: 'Carlos & Maria Rodriguez',
      location: 'Rodriguez Family Home',
      day: 'Saturday',
      time: '7:00 PM',
      focus: 'Spanish Speakers',
      members: 16,
      contact: 'carlos.rodriguez@example.com'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Authentic Community',
      description: 'Build deep, meaningful relationships with fellow believers in a small, intimate setting.'
    },
    {
      icon: Users,
      title: 'Personal Growth',
      description: 'Experience accelerated spiritual growth through accountability and encouragement.'
    },
    {
      icon: Calendar,
      title: 'Consistent Fellowship',
      description: 'Regular weekly gatherings create stability and ongoing support in your faith journey.'
    }
  ];

  const testimonials = [
    {
      quote: "Our cell group has become our extended family. The support and love we've received has been incredible.",
      author: "Jessica Martinez",
      group: "Downtown Cell"
    },
    {
      quote: "I've grown more in my faith in the past year through my cell group than I had in years of just attending church.",
      author: "David Thompson",
      group: "College & Career"
    },
    {
      quote: "The prayer support and practical help during my illness showed me what true Christian community looks like.",
      author: "Margaret Wilson",
      group: "Seniors Fellowship"
    }
  ];

  return (
    <div className="min-h-screen py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 slide-up">
            Cell Groups
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Experience authentic Christian community in small group settings. Our cell groups 
            provide the perfect environment for deeper relationships, spiritual growth, and mutual support.
          </p>
        </div>

        {/* What Are Cell Groups */}
        <div className="mb-16">
          <Card className="church-card-gradient border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-primary">What Are Cell Groups?</h2>
                <p className="text-lg leading-relaxed text-foreground">
                  Cell groups are small gatherings of 8-20 people who meet regularly for Bible study, 
                  prayer, fellowship, and mutual encouragement. They're designed to help you grow 
                  spiritually while building meaningful relationships with other believers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">50+</div>
                    <p className="text-sm text-muted-foreground">Active Cell Groups</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">800+</div>
                    <p className="text-sm text-muted-foreground">Cell Group Members</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">15</div>
                    <p className="text-sm text-muted-foreground">Years of Cell Ministry</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Join a Cell Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-accent-light w-fit">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Cell Groups */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Find Your Cell Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cellGroups.map((cell, index) => (
              <Card
                key={cell.name}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{cell.name}</CardTitle>
                  <CardDescription>
                    Led by {cell.leader}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{cell.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{cell.day}s</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{cell.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{cell.members} members</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <span className="inline-block bg-secondary-light text-secondary px-3 py-1 rounded-full text-xs font-medium">
                      {cell.focus}
                    </span>
                  </div>

                  <Button className="w-full church-gold-gradient hover:opacity-90 transition-opacity mt-4">
                    Join This Group
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How Cell Groups Work */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">How Cell Groups Work</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="church-card-gradient border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-primary">What to Expect</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Welcome & Fellowship</h4>
                          <p className="text-sm text-muted-foreground">Time to connect and share life updates</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Bible Study</h4>
                          <p className="text-sm text-muted-foreground">Interactive discussion of God's Word</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Prayer Time</h4>
                          <p className="text-sm text-muted-foreground">Praying for each other and community needs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Mission Focus</h4>
                          <p className="text-sm text-muted-foreground">Planning outreach and service activities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-primary">Meeting Format</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Welcome & Check-in</span>
                        <span className="text-muted-foreground">15 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Worship & Prayer</span>
                        <span className="text-muted-foreground">10 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Bible Study Discussion</span>
                        <span className="text-muted-foreground">45 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Prayer & Ministry</span>
                        <span className="text-muted-foreground">20 min</span>
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between items-center font-medium">
                          <span className="text-primary">Total Meeting Time</span>
                          <span className="text-primary">90 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">What Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.author}
                className={`church-card-gradient border-0 fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <blockquote className="text-foreground leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <p className="font-medium text-primary">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.group}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="church-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Ready to Join a Cell Group?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Take the next step in your spiritual journey. Join a cell group today and 
                experience the joy of authentic Christian community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="church-gold-gradient hover:opacity-90 transition-opacity">
                  Find My Group
                </Button>
                <Button size="lg" variant="outline" className="hover-gold">
                  Contact Cell Pastor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cells;