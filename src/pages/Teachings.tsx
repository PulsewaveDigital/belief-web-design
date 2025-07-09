import { useState } from 'react';
import { Search, Filter, Play, Download, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Teachings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Teachings' },
    { value: 'sermons', label: 'Sunday Sermons' },
    { value: 'bible-studies', label: 'Bible Studies' },
    { value: 'devotionals', label: 'Devotionals' },
    { value: 'special', label: 'Special Events' }
  ];

  const teachings = [
    {
      id: 1,
      title: 'Walking in Faith Through Uncertainty',
      speaker: 'Pastor Michael Johnson',
      date: '2024-01-07',
      category: 'sermons',
      series: 'Faith Foundations',
      duration: '35 min',
      description: 'Discover how to trust God even when the path ahead seems unclear.',
      audioUrl: '#',
      videoUrl: '#',
      thumbnailUrl: '/api/placeholder/400/225'
    },
    {
      id: 2,
      title: 'The Power of Prayer in Daily Life',
      speaker: 'Pastor Sarah Williams',
      date: '2024-01-03',
      category: 'bible-studies',
      series: 'Prayer Life',
      duration: '28 min',
      description: 'Understanding how prayer transforms our relationship with God and others.',
      audioUrl: '#',
      videoUrl: '#',
      thumbnailUrl: '/api/placeholder/400/225'
    },
    {
      id: 3,
      title: 'Grace That Transforms',
      speaker: 'Pastor Michael Johnson',
      date: '2023-12-31',
      category: 'sermons',
      series: 'New Year Series',
      duration: '42 min',
      description: 'How God\'s grace changes everything about how we live and love.',
      audioUrl: '#',
      videoUrl: '#',
      thumbnailUrl: '/api/placeholder/400/225'
    },
    {
      id: 4,
      title: 'Finding Purpose in God\'s Plan',
      speaker: 'Pastor David Chen',
      date: '2023-12-27',
      category: 'devotionals',
      series: 'Purpose Driven Life',
      duration: '15 min',
      description: 'A short devotional on discovering your calling and purpose.',
      audioUrl: '#',
      videoUrl: null,
      thumbnailUrl: '/api/placeholder/400/225'
    },
    {
      id: 5,
      title: 'Christmas: God With Us',
      speaker: 'Pastor Michael Johnson',
      date: '2023-12-24',
      category: 'special',
      series: 'Christmas 2023',
      duration: '38 min',
      description: 'Celebrating the incarnation and what it means for our lives today.',
      audioUrl: '#',
      videoUrl: '#',
      thumbnailUrl: '/api/placeholder/400/225'
    },
    {
      id: 6,
      title: 'The Heart of Worship',
      speaker: 'Elder Jennifer Martinez',
      date: '2023-12-20',
      category: 'bible-studies',
      series: 'True Worship',
      duration: '32 min',
      description: 'Exploring what it means to worship God in spirit and truth.',
      audioUrl: '#',
      videoUrl: '#',
      thumbnailUrl: '/api/placeholder/400/225'
    }
  ];

  const filteredTeachings = teachings.filter((teaching) => {
    const matchesSearch = teaching.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teaching.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teaching.series.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || teaching.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16 church-section-gradient">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 slide-up">
            Teachings & Sermons
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-up">
            Explore our library of sermons, Bible studies, and devotionals designed to help you 
            grow deeper in your faith and understanding of God's Word.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <Card className="church-card-gradient border-0 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search teachings, speakers, or series..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="w-full md:w-48">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Series */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Current Series</h2>
          <Card className="church-card-gradient border-0 max-w-4xl mx-auto hover-lift">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Faith Foundations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A powerful series exploring the fundamental principles of walking with God. 
                    Discover how to build unshakeable faith that sustains you through life's 
                    challenges and victories.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>4-Week Series</span>
                    <span>•</span>
                    <span>Pastor Michael Johnson</span>
                  </div>
                  <Button className="church-gold-gradient hover:opacity-90 transition-opacity">
                    Watch Series
                  </Button>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Play className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teachings Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Recent Teachings ({filteredTeachings.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachings.map((teaching, index) => (
              <Card
                key={teaching.id}
                className={`church-card-gradient border-0 hover-lift fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {teaching.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-lg text-primary mb-2 line-clamp-2">
                      {teaching.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed line-clamp-2">
                      {teaching.description}
                    </CardDescription>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{teaching.speaker}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(teaching.date).toLocaleDateString()}</span>
                    </div>
                    <div className="text-secondary font-medium">{teaching.series}</div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    {teaching.videoUrl && (
                      <Button size="sm" className="flex-1 hover-gold">
                        <Play className="h-3 w-3 mr-2" />
                        Watch
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="flex-1 hover-gold">
                      <Download className="h-3 w-3 mr-2" />
                      Audio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="text-center">
          <Card className="church-card-gradient border-0 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Never Miss a Teaching
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Subscribe to our podcast or follow us on YouTube to get the latest 
                sermons and teachings delivered directly to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="church-gold-gradient hover:opacity-90 transition-opacity">
                  Subscribe to Podcast
                </Button>
                <Button variant="outline" className="hover-gold">
                  Follow on YouTube
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Teachings;