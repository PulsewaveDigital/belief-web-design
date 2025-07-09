import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const weeklyPrograms = [
    {
      title: 'Sunday Worship Service',
      times: ['9:00 AM', '11:00 AM'],
      location: 'Main Sanctuary',
      description: 'Join us for inspiring worship, powerful biblical teaching, and fellowship with our church family. Each service includes contemporary music, prayer, and practical messages for daily living.',
      highlight: true
    },
    {
      title: 'Wednesday Prayer Meeting',
      times: ['7:00 PM'],
      location: 'Fellowship Hall',
      description: 'A dedicated time for corporate prayer, intercession, and seeking God\'s guidance. Experience the power of united prayer as we lift up our community and world.'
    },
    {
      title: 'Friday Youth Night',
      times: ['6:30 PM'],
      location: 'Youth Center',
      description: 'Dynamic programs for teenagers including worship, games, biblical teaching, and small group discussions. Building strong foundations for young disciples.'
    },
    {
      title: 'Saturday Morning Prayer',
      times: ['6:00 AM'],
      location: 'Prayer Garden',
      description: 'Start your weekend with focused prayer and meditation. A peaceful time to seek God\'s heart and prepare for the week ahead.'
    }
  ];

  const specialPrograms = [
    {
      title: 'Monthly Communion Service',
      frequency: 'First Sunday of each month',
      description: 'A sacred time of remembrance and reflection during our morning worship service.',
      nextDate: '2024-02-04'
    },
    {
      title: 'Quarterly Baptism Service',
      frequency: 'Every three months',
      description: 'Celebrating new believers taking their next step in faith through water baptism.',
      nextDate: '2024-03-17'
    },
    {
      title: 'Annual Church Retreat',
      frequency: 'Once yearly',
      description: 'A weekend away for deeper fellowship, teaching, and spiritual renewal.',
      nextDate: '2024-08-15'
    },
    {
      title: 'Christmas & Easter Services',
      frequency: 'Seasonal',
      description: 'Special celebration services marking the most important events in Christian faith.',
      nextDate: '2024-03-31'
    }
  ];

  const ministryPrograms = [
    {
      title: 'Men\'s Ministry',
      schedule: 'Second Saturday, 8:00 AM',
      description: 'Fellowship, discipleship, and service opportunities for men to grow in faith and leadership.',
      activities: ['Bible Study', 'Service Projects', 'Fellowship Breakfast']
    },
    {
      title: 'Women\'s Ministry',
      schedule: 'Third Saturday, 10:00 AM',
      description: 'A supportive community for women to connect, learn, and serve together.',
      activities: ['Bible Study', 'Life Groups', 'Outreach Events']
    },
    {
      title: 'Children\'s Ministry',
      schedule: 'Sundays during service',
      description: 'Age-appropriate programs for children from nursery through elementary school.',
      activities: ['Sunday School', 'Vacation Bible School', 'Children\'s Choir']
    },
    {
      title: 'Senior Adults Ministry',
      schedule: 'Monthly potluck lunches',
      description: 'Fellowship and ministry opportunities specifically designed for our senior members.',
      activities: ['Bible Study', 'Social Events', 'Service Projects']
    }
  ];

  return (
    <div className="min-h-screen py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 slide-up">
            Programs & Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Discover opportunities to worship, grow, serve, and connect with our vibrant 
            church community through our diverse programs and events.
          </p>
        </div>

        {/* Weekly Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Weekly Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyPrograms.map((program, index) => (
              <Card
                key={program.title}
                className={`border-0 hover-lift fade-in ${
                  program.highlight ? 'church-gold-gradient' : 'church-card-gradient'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${
                    program.highlight ? 'text-primary' : 'text-primary'
                  }`}>
                    {program.title}
                  </CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{program.times.join(' & ')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{program.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`leading-relaxed mb-4 ${
                    program.highlight ? 'text-primary/80' : 'text-foreground'
                  }`}>
                    {program.description}
                  </p>
                  <Button 
                    variant={program.highlight ? "secondary" : "default"}
                    className={program.highlight ? "" : "church-gold-gradient hover:opacity-90 transition-opacity"}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Special Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPrograms.map((program, index) => (
              <Card
                key={program.title}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{program.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{program.frequency}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Next: {new Date(program.nextDate).toLocaleDateString()}
                    </div>
                    <Button size="sm" variant="outline" className="hover-gold">
                      More Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ministry Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Ministry Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ministryPrograms.map((ministry, index) => (
              <Card
                key={ministry.title}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{ministry.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{ministry.schedule}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-4">
                    {ministry.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Activities Include:</h4>
                    <div className="flex flex-wrap gap-2">
                      {ministry.activities.map((activity) => (
                        <span
                          key={activity}
                          className="inline-block bg-secondary-light text-secondary px-2 py-1 rounded-full text-xs"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="text-center mb-16">
          <Card className="church-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Stay Updated with Our Calendar
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Add our church calendar to your personal calendar to never miss an event. 
                Get automatic reminders for services, meetings, and special events.
              </p>
              <Button className="church-gold-gradient hover:opacity-90 transition-opacity">
                <Calendar className="mr-2 h-4 w-4" />
                Subscribe to Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact for More Info */}
        <div className="text-center">
          <Card className="church-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Questions About Our Programs?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our ministry team is here to help you find the right program for your 
                spiritual growth and service opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="church-gold-gradient hover:opacity-90 transition-opacity">
                  Contact Ministry Team
                </Button>
                <Button variant="outline" className="hover-gold">
                  Visit Us This Sunday
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programs;