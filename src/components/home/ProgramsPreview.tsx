import { Link } from 'react-router-dom';
import { Calendar, Users, Book, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProgramsPreview = () => {
  const programs = [
    {
      icon: Calendar,
      title: 'Sunday Worship',
      description: 'Join us for inspiring worship, powerful messages, and community fellowship every Sunday.',
      time: '9:00 AM & 11:00 AM',
      href: '/programs/sunday-service',
      color: 'text-blue-600'
    },
    {
      icon: Book,
      title: 'Bible Studies',
      description: 'Dive deeper into God\'s Word with our weekly Bible study groups for all ages.',
      time: 'Wednesdays 7:00 PM',
      href: '/teachings/bible-studies',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Cell Groups',
      description: 'Experience authentic community in our small group gatherings throughout the city.',
      time: 'Various Times',
      href: '/cells',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: 'Youth Ministry',
      description: 'Dynamic programs designed to help young people grow in faith and friendship.',
      time: 'Fridays 6:30 PM',
      href: '/youth',
      color: 'text-red-600'
    }
  ];

  const upcomingEvents = [
    {
      date: 'Dec 15',
      title: 'Christmas Concert',
      description: 'Join us for a beautiful evening of worship and celebration'
    },
    {
      date: 'Dec 22',
      title: 'Christmas Eve Service',
      description: 'Special candlelight service celebrating the birth of our Savior'
    },
    {
      date: 'Jan 5',
      title: 'New Year Prayer Night',
      description: 'Start the year with prayer, worship, and community'
    }
  ];

  return (
    <section className="py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 slide-up">
            Our Programs & Ministries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Discover meaningful ways to grow in faith, connect with others, and make a difference 
            in our community through our diverse programs and ministries.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`church-card-gradient border-0 hover-lift group cursor-pointer fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent-light w-fit group-hover:bg-secondary-light transition-colors">
                  <program.icon className={`h-6 w-6 ${program.color} group-hover:text-secondary`} />
                </div>
                <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {program.time}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-foreground">
                  {program.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full hover-gold group-hover:bg-secondary-light"
                  asChild
                >
                  <Link to={program.href} className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <Card className="church-card-gradient border-0 max-w-3xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Get Involved?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're new to faith or have been walking with Jesus for years, 
                there's a place for you in our community. Explore all our programs and 
                find where you can grow and serve.
              </p>
              <Button
                size="lg"
                className="church-gold-gradient hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/programs">
                  View All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.title}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-sm font-bold">
                      {event.date}
                    </div>
                    <CardTitle className="text-lg text-primary">{event.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;