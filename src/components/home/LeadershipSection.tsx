import { Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import leadershipImage from '@/assets/leadership-team.jpg';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Pastor Michael Johnson',
      title: 'Senior Pastor',
      bio: '15+ years of ministry experience, passionate about discipleship and community outreach. Holds M.Div from Seminary University.',
      email: 'pastor.michael@soteriahlm.org',
      phone: '(555) 123-4567'
    },
    {
      name: 'Pastor Sarah Williams',
      title: 'Associate Pastor - Women\'s Ministry',
      bio: 'Dedicated to empowering women in their faith journey. Background in counseling and spiritual direction.',
      email: 'pastor.sarah@soteriahlm.org',
      phone: '(555) 123-4568'
    },
    {
      name: 'Pastor David Chen',
      title: 'Youth Pastor',
      bio: 'Energetic leader focused on youth development and mentorship. Former missionary with global perspective.',
      email: 'pastor.david@soteriahlm.org',
      phone: '(555) 123-4569'
    },
    {
      name: 'Elder Jennifer Martinez',
      title: 'Elder - Community Outreach',
      bio: 'Long-time member with heart for community service. Leads our social justice and outreach initiatives.',
      email: 'elder.jennifer@soteriahlm.org',
      phone: '(555) 123-4570'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 slide-up">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Our dedicated pastoral team and elders are here to guide, support, and walk alongside 
            you in your spiritual journey.
          </p>
        </div>

        {/* Leadership Team Photo */}
        <div className="mb-16 text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <img
              src={leadershipImage}
              alt="Soteria Higher Life Ministries Leadership Team"
              className="w-full rounded-lg shadow-lg soteria-card-gradient"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Our leadership team during our annual planning retreat
            </p>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={leader.name}
              className={`soteria-card-gradient border-0 hover-lift fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{leader.name}</CardTitle>
                <CardDescription className="text-soteria-goldenYellow font-medium">
                  {leader.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  {leader.bio}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover-sky-blue"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover-sky-blue"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">Call</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16">
          <Card className="soteria-card-gradient border-0 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Our Leadership Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center leading-relaxed text-foreground">
                We believe in servant leadership, following the example of Jesus Christ. Our leaders 
                are committed to transparency, accountability, and creating an environment where 
                everyone can grow in their faith and use their gifts to serve others.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-primary">Servant Hearts</h4>
                  <p className="text-sm text-muted-foreground">
                    Leading with humility and putting others first
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-primary">Biblical Foundation</h4>
                  <p className="text-sm text-muted-foreground">
                    Grounded in Scripture and sound doctrine
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-primary">Community Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to building strong, healthy relationships
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;