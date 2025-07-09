import { useState } from 'react';
import { Play, Image, Headphones, Download, Calendar, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Media = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Sunday Service - Walking in Faith',
      date: '2024-01-07',
      thumbnail: '/api/placeholder/640/360',
      duration: '1:15:23',
      views: '234 views'
    },
    {
      id: 2,
      title: 'Christmas Eve Service 2023',
      date: '2023-12-24',
      thumbnail: '/api/placeholder/640/360',
      duration: '52:18',
      views: '892 views'
    },
    {
      id: 3,
      title: 'Youth Night Highlights',
      date: '2024-01-05',
      thumbnail: '/api/placeholder/640/360',
      duration: '8:45',
      views: '156 views'
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: 'Grace Community Podcast - Episode 24',
      description: 'Finding Hope in Difficult Times',
      date: '2024-01-10',
      duration: '32:15',
      downloads: '445 downloads'
    },
    {
      id: 2,
      title: 'Grace Community Podcast - Episode 23',
      description: 'The Power of Community',
      date: '2024-01-03',
      duration: '28:42',
      downloads: '523 downloads'
    },
    {
      id: 3,
      title: 'Grace Community Podcast - Episode 22',
      description: 'New Year, New Mercies',
      date: '2023-12-27',
      duration: '35:18',
      downloads: '612 downloads'
    }
  ];

  const photoGalleries = [
    {
      id: 1,
      title: 'Christmas Celebration 2023',
      date: '2023-12-24',
      photoCount: 45,
      coverImage: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Youth Camp Summer 2023',
      date: '2023-08-15',
      photoCount: 120,
      coverImage: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Community Outreach Day',
      date: '2023-11-18',
      photoCount: 67,
      coverImage: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Church Anniversary Celebration',
      date: '2023-09-10',
      photoCount: 89,
      coverImage: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="min-h-screen py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 slide-up">
            Media Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Experience our worship services, browse photo galleries from church events, 
            and listen to our podcast series from anywhere, anytime.
          </p>
        </div>

        {/* Live Stream Section */}
        <div className="mb-16">
          <Card className="church-card-gradient border-0 max-w-4xl mx-auto hover-lift">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent-light">
                  <Play className="h-12 w-12 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Watch Live</h2>
                  <p className="text-muted-foreground mb-6">
                    Join us for live worship every Sunday at 9:00 AM and 11:00 AM. 
                    Can't make it in person? Watch our live stream from anywhere in the world.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="church-gold-gradient hover:opacity-90 transition-opacity">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Live Now
                    </Button>
                    <Button size="lg" variant="outline" className="hover-gold">
                      Set Reminder
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Media Tabs */}
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="videos" className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Videos</span>
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="flex items-center space-x-2">
              <Headphones className="h-4 w-4" />
              <span>Podcasts</span>
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center space-x-2">
              <Image className="h-4 w-4" />
              <span>Photos</span>
            </TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card
                  key={video.id}
                  className={`church-card-gradient border-0 hover-lift cursor-pointer fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedVideo(video)}
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg text-primary mb-2 line-clamp-2">
                      {video.title}
                    </CardTitle>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(video.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-3 w-3" />
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="hover-gold">
                Load More Videos
              </Button>
            </div>
          </TabsContent>

          {/* Podcasts Tab */}
          <TabsContent value="podcasts" className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-4">
              {podcasts.map((podcast, index) => (
                <Card
                  key={podcast.id}
                  className={`church-card-gradient border-0 hover-lift fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-accent-light rounded-lg flex items-center justify-center">
                        <Headphones className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-primary mb-1">
                          {podcast.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">{podcast.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(podcast.date).toLocaleDateString()}</span>
                          </div>
                          <span>•</span>
                          <span>{podcast.duration}</span>
                          <span>•</span>
                          <span>{podcast.downloads}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="church-gold-gradient hover:opacity-90 transition-opacity">
                          <Play className="h-3 w-3 mr-2" />
                          Play
                        </Button>
                        <Button size="sm" variant="outline" className="hover-gold">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4">
              <Button variant="outline" className="hover-gold">
                View All Episodes
              </Button>
              <div>
                <Card className="church-card-gradient border-0 max-w-md mx-auto">
                  <CardContent className="py-6">
                    <h4 className="font-semibold text-primary mb-2">Subscribe to Our Podcast</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Never miss an episode! Available on all major podcast platforms.
                    </p>
                    <div className="flex space-x-2 justify-center">
                      <Button size="sm" variant="outline" className="hover-gold">
                        Apple Podcasts
                      </Button>
                      <Button size="sm" variant="outline" className="hover-gold">
                        Spotify
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {photoGalleries.map((gallery, index) => (
                <Card
                  key={gallery.id}
                  className={`church-card-gradient border-0 hover-lift cursor-pointer fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {gallery.photoCount} photos
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg text-primary mb-2 line-clamp-1">
                      {gallery.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(gallery.date).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="hover-gold">
                View All Galleries
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Connect Section */}
        <div className="mt-16 text-center">
          <Card className="church-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Stay Connected
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Follow us on social media to get the latest updates, behind-the-scenes content, 
                and daily inspiration from our church community.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" className="hover-gold">
                  YouTube
                </Button>
                <Button variant="outline" className="hover-gold">
                  Facebook
                </Button>
                <Button variant="outline" className="hover-gold">
                  Instagram
                </Button>
                <Button variant="outline" className="hover-gold">
                  Podcast
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Media;