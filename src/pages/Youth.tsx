import { Calendar, Users, Target, Heart, Star, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Youth = () => {
  const programs = [
    {
      title: 'Friday Night Youth',
      time: 'Fridays 6:30 PM - 9:00 PM',
      location: 'Youth Center',
      ageGroup: 'Ages 13-18',
      description: 'High-energy worship, relevant biblical teaching, games, and authentic fellowship for teenagers.',
      activities: ['Worship Music', 'Biblical Teaching', 'Small Groups', 'Games & Fun']
    },
    {
      title: 'Saturday Morning Discipleship',
      time: 'Saturdays 9:00 AM - 11:00 AM',
      location: 'Youth Center',
      ageGroup: 'Ages 13-18',
      description: 'Deeper Bible study and discipleship training for youth who want to grow in their faith.',
      activities: ['Bible Study', 'Leadership Training', 'Mentorship', 'Prayer']
    },
    {
      title: 'Youth Small Groups',
      time: 'Various Times',
      location: 'Different Homes',
      ageGroup: 'Ages 13-18',
      description: 'Intimate small group settings for building closer friendships and spiritual accountability.',
      activities: ['Life Groups', 'Accountability', 'Prayer Partners', 'Community Service']
    }
  ];

  const upcomingEvents = [
    {
      title: 'Winter Retreat 2024',
      date: '2024-02-16',
      endDate: '2024-02-18',
      location: 'Mountain View Camp',
      description: 'A weekend of worship, teaching, outdoor activities, and building lifelong friendships.',
      cost: '$150',
      spaces: '45 spots available'
    },
    {
      title: 'Youth Leadership Conference',
      date: '2024-03-22',
      endDate: '2024-03-23',
      location: 'Grace Community Church',
      description: 'Equipping young leaders with skills and vision for ministry and life.',
      cost: '$50',
      spaces: '20 spots available'
    },
    {
      title: 'Community Service Day',
      date: '2024-04-13',
      location: 'Local Community Center',
      description: 'Making a difference in our community through hands-on service projects.',
      cost: 'Free',
      spaces: 'Unlimited'
    },
    {
      title: 'Summer Mission Trip',
      date: '2024-07-15',
      endDate: '2024-07-22',
      location: 'Mexico',
      description: 'Life-changing mission experience serving communities and sharing God\'s love.',
      cost: '$800',
      spaces: '12 spots available'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Pastor David Chen',
      role: 'Youth Pastor',
      bio: 'Passionate about helping young people discover their identity in Christ and develop into godly leaders.',
      contact: 'david.chen@gracecommunity.org'
    },
    {
      name: 'Sarah Johnson',
      role: 'Assistant Youth Leader',
      bio: 'Former youth group member who loves mentoring teenage girls and organizing outreach events.',
      contact: 'sarah.johnson@gracecommunity.org'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Young Adult Volunteer',
      bio: 'College student who serves as a mentor and helps with worship music and technical support.',
      contact: 'mike.rodriguez@gracecommunity.org'
    }
  ];

  const testimonials = [
    {
      quote: "Youth group changed my life. I found real friends who care about me and learned what it means to follow Jesus.",
      author: "Emma Thompson",
      age: 16
    },
    {
      quote: "The leadership opportunities I've had here have prepared me for college and given me confidence in my faith.",
      author: "Jordan Martinez",
      age: 18
    },
    {
      quote: "Pastor David and the team really care about us. They're always there when we need someone to talk to.",
      author: "Alex Chen",
      age: 15
    }
  ];

  return (
    <div className="min-h-screen py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 slide-up">
            Youth Ministry
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Where young people discover their purpose, build authentic friendships, and grow 
            in their relationship with Jesus Christ. Ages 13-18 welcome!
          </p>
        </div>

        {/* Vision Statement */}
        <div className="mb-16">
          <Card className="church-card-gradient border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent-light">
                  <Target className="h-12 w-12 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
                <p className="text-lg leading-relaxed text-foreground">
                  To see every young person in our community encounter the love of Christ, 
                  discover their God-given purpose, and become world-changing leaders who 
                  impact their generation for God's glory.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">150+</div>
                    <p className="text-sm text-muted-foreground">Active Youth Members</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">25</div>
                    <p className="text-sm text-muted-foreground">Youth Leaders & Volunteers</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">8</div>
                    <p className="text-sm text-muted-foreground">Years of Youth Ministry</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Weekly Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={program.title}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{program.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-3 w-3" />
                      <span>{program.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-3 w-3" />
                      <span>{program.ageGroup}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">What We Do:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.activities.map((activity) => (
                        <span
                          key={activity}
                          className="inline-block bg-secondary-light text-secondary px-2 py-1 rounded-full text-xs"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full church-gold-gradient hover:opacity-90 transition-opacity">
                    Join This Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.title}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-primary mb-2">{event.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(event.date).toLocaleDateString()}
                            {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString()}`}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-secondary">{event.cost}</div>
                      <div className="text-xs text-muted-foreground">{event.spaces}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {event.description}
                  </p>
                  <Button className="w-full church-gold-gradient hover:opacity-90 transition-opacity">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipTeam.map((leader, index) => (
              <Card
                key={leader.name}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg text-primary">{leader.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">
                    {leader.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed text-center">
                    {leader.bio}
                  </p>
                  <Button variant="outline" size="sm" className="w-full hover-gold">
                    Contact {leader.name.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.author}
                className={`church-card-gradient border-0 fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground leading-relaxed mb-4 text-center">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-medium text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">Age {testimonial.age}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parent Information */}
        <div className="mb-16">
          <Card className="church-card-gradient border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-primary">Information for Parents</h2>
                <p className="text-lg leading-relaxed text-foreground">
                  We understand that entrusting your teenager to our care is a big decision. 
                  We're committed to partnering with you in raising godly young adults.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Safety & Security</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Background-checked volunteers and staff</li>
                      <li>• Clear child protection policies</li>
                      <li>• Secure check-in/check-out procedures</li>
                      <li>• Open-door policy for parent visits</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Communication</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Monthly parent newsletters</li>
                      <li>• Event updates and photos</li>
                      <li>• Direct access to youth pastor</li>
                      <li>• Regular parent meetings</li>
                    </ul>
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
                Ready to Get Involved?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're a student looking for community or a parent seeking a safe place 
                for your teenager to grow in faith, we'd love to welcome you into our youth family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="church-gold-gradient hover:opacity-90 transition-opacity">
                  Visit Youth Group
                </Button>
                <Button size="lg" variant="outline" className="hover-gold">
                  Talk to Youth Pastor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Youth;