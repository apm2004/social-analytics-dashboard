// KPI Data
export const kpiData = {
  engagementScore: 87.5,
  aiIntentScore: 92.3,
  conversionPrediction: 68.7,
  followers: 45678,
  followersGrowth: 12.5,
  avgEngagement: 4.8,
  totalPosts: 234,
  reach: 125000,
  reachGrowth: 8.3
};

// Engagement over time
export const engagementOverTime = [
  { date: '2024-11-01', engagement: 4200, reach: 15000, likes: 3200, comments: 450, shares: 230 },
  { date: '2024-11-02', engagement: 4500, reach: 16500, likes: 3500, comments: 480, shares: 260 },
  { date: '2024-11-03', engagement: 3800, reach: 14200, likes: 2900, comments: 390, shares: 210 },
  { date: '2024-11-04', engagement: 5200, reach: 18900, likes: 4100, comments: 550, shares: 310 },
  { date: '2024-11-05', engagement: 4900, reach: 17500, likes: 3800, comments: 520, shares: 290 },
  { date: '2024-11-06', engagement: 5500, reach: 19800, likes: 4400, comments: 580, shares: 330 },
  { date: '2024-11-07', engagement: 6100, reach: 21200, likes: 4900, comments: 620, shares: 380 },
  { date: '2024-11-08', engagement: 5800, reach: 20100, likes: 4600, comments: 590, shares: 350 },
  { date: '2024-11-09', engagement: 6300, reach: 22500, likes: 5200, comments: 640, shares: 410 },
  { date: '2024-11-10', engagement: 5900, reach: 21000, likes: 4800, comments: 600, shares: 370 },
  { date: '2024-11-11', engagement: 6500, reach: 23400, likes: 5400, comments: 660, shares: 430 },
  { date: '2024-11-12', engagement: 7200, reach: 25800, likes: 6100, comments: 720, shares: 490 },
  { date: '2024-11-13', engagement: 6800, reach: 24200, likes: 5700, comments: 680, shares: 450 },
  { date: '2024-11-14', engagement: 7400, reach: 26500, likes: 6300, comments: 740, shares: 520 },
];

// Demographics
export const demographics = [
  { name: '18-24', value: 2500, percentage: 28, color: '#3b82f6' },
  { name: '25-34', value: 3200, percentage: 36, color: '#8b5cf6' },
  { name: '35-44', value: 1800, percentage: 20, color: '#ec4899' },
  { name: '45-54', value: 1000, percentage: 11, color: '#f59e0b' },
  { name: '55+', value: 500, percentage: 5, color: '#10b981' },
];

// Platform data
export const platformData = [
  { platform: 'Instagram', followers: 25000, engagement: 8.5, posts: 145, growth: 12.3 },
  { platform: 'Twitter', followers: 15000, engagement: 6.2, posts: 312, growth: 8.7 },
  { platform: 'YouTube', followers: 8000, engagement: 12.3, posts: 45, growth: 15.2 },
  { platform: 'LinkedIn', followers: 5000, engagement: 4.8, posts: 78, growth: 6.5 },
  { platform: 'TikTok', followers: 12000, engagement: 15.7, posts: 89, growth: 22.1 },
];

// AI Insights
export const aiInsights = {
  userIntents: [
    { intent: 'Looking for tutorials', percentage: 35, trend: 'up', change: 12 },
    { intent: 'Product research', percentage: 28, trend: 'up', change: 8 },
    { intent: 'Entertainment', percentage: 22, trend: 'stable', change: 0 },
    { intent: 'News & updates', percentage: 15, trend: 'down', change: -5 },
  ],
  sentimentAnalysis: {
    positive: 68,
    neutral: 24,
    negative: 8
  },
  bestTimeToPost: [
    { day: 'Monday', hour: '9 AM - 11 AM', engagement: 'High', score: 85 },
    { day: 'Wednesday', hour: '2 PM - 4 PM', engagement: 'High', score: 88 },
    { day: 'Friday', hour: '7 PM - 9 PM', engagement: 'Very High', score: 95 },
    { day: 'Sunday', hour: '11 AM - 1 PM', engagement: 'Medium', score: 72 },
  ],
  contentRecommendations: [
    {
      type: 'Video Reels',
      reason: '45% higher engagement than static posts',
      action: 'Create 3-4 reels per week',
      priority: 'high',
      impact: '+35% engagement'
    },
    {
      type: 'Tutorial Content',
      reason: 'High user demand detected',
      action: 'Focus on how-to guides',
      priority: 'high',
      impact: '+28% reach'
    },
    {
      type: 'Behind-the-scenes',
      reason: 'Builds authentic connection',
      action: 'Share 2-3 stories weekly',
      priority: 'medium',
      impact: '+15% follower growth'
    },
    {
      type: 'User-generated content',
      reason: 'Increases trust and engagement',
      action: 'Feature customer stories',
      priority: 'medium',
      impact: '+20% conversion'
    }
  ],
  audienceInterests: [
    { topic: 'Technology', score: 92, trend: 'rising' },
    { topic: 'Business', score: 78, trend: 'stable' },
    { topic: 'Lifestyle', score: 65, trend: 'rising' },
    { topic: 'Travel', score: 58, trend: 'stable' },
    { topic: 'Food', score: 45, trend: 'falling' },
    { topic: 'Fashion', score: 38, trend: 'stable' },
    { topic: 'Fitness', score: 72, trend: 'rising' },
    { topic: 'Education', score: 85, trend: 'rising' },
  ]
};

// Content performance
export const contentPerformance = [
  {
    id: 1,
    type: 'Reel',
    caption: '5 Tips for Better Productivity 🚀',
    platform: 'Instagram',
    date: '2024-11-14',
    likes: 8542,
    comments: 342,
    shares: 1205,
    reach: 45000,
    engagement: 9.8,
    recommendation: 'Boost',
    thumbnail: '🎬'
  },
  {
    id: 2,
    type: 'Post',
    caption: 'New product launch announcement',
    platform: 'Twitter',
    date: '2024-11-13',
    likes: 5234,
    comments: 189,
    shares: 890,
    reach: 32000,
    engagement: 7.2,
    recommendation: 'Boost',
    thumbnail: '📢'
  },
  {
    id: 3,
    type: 'Story',
    caption: 'Behind the scenes of our workspace',
    platform: 'Instagram',
    date: '2024-11-13',
    likes: 3421,
    comments: 98,
    shares: 234,
    reach: 18000,
    engagement: 5.4,
    recommendation: 'Improve',
    thumbnail: '📸'
  },
  {
    id: 4,
    type: 'Video',
    caption: 'Tutorial: How to use our platform',
    platform: 'YouTube',
    date: '2024-11-12',
    likes: 12453,
    comments: 567,
    shares: 2341,
    reach: 78000,
    engagement: 12.5,
    recommendation: 'Boost',
    thumbnail: '🎥'
  },
  {
    id: 5,
    type: 'Post',
    caption: 'Monday motivation quotes',
    platform: 'LinkedIn',
    date: '2024-11-11',
    likes: 2145,
    comments: 67,
    shares: 345,
    reach: 12000,
    engagement: 4.2,
    recommendation: 'Ignore',
    thumbnail: '💭'
  },
  {
    id: 6,
    type: 'Reel',
    caption: 'Quick tips for social media growth',
    platform: 'Instagram',
    date: '2024-11-10',
    likes: 7234,
    comments: 298,
    shares: 987,
    reach: 38000,
    engagement: 8.9,
    recommendation: 'Boost',
    thumbnail: '📈'
  },
  {
    id: 7,
    type: 'Post',
    caption: 'Customer success story',
    platform: 'LinkedIn',
    date: '2024-11-09',
    likes: 3567,
    comments: 145,
    shares: 456,
    reach: 19000,
    engagement: 6.8,
    recommendation: 'Improve',
    thumbnail: '⭐'
  },
  {
    id: 8,
    type: 'Video',
    caption: 'Product demo and features overview',
    platform: 'YouTube',
    date: '2024-11-08',
    likes: 9876,
    comments: 432,
    shares: 1876,
    reach: 65000,
    engagement: 11.2,
    recommendation: 'Boost',
    thumbnail: '🎯'
  },
];

// Alerts
export const alerts = [
  {
    id: 1,
    type: 'warning',
    message: '15% drop in engagement detected in last 24h',
    time: '2 hours ago',
    action: 'Review recent posts'
  },
  {
    id: 2,
    type: 'success',
    message: 'Your reel reached 50K views milestone',
    time: '5 hours ago',
    action: 'View analytics'
  },
  {
    id: 3,
    type: 'info',
    message: 'Best time to post: Friday 7-9 PM',
    time: '1 day ago',
    action: 'Schedule post'
  },
];

// User journey
export const userJourney = [
  { stage: 'Awareness', action: 'Viewed Instagram post', time: 'Day 1, 10:30 AM', icon: '👀' },
  { stage: 'Interest', action: 'Clicked link in bio', time: 'Day 1, 10:32 AM', icon: '🔗' },
  { stage: 'Consideration', action: 'Browsed product page', time: 'Day 1, 10:35 AM', icon: '🔍' },
  { stage: 'Intent', action: 'Added to cart', time: 'Day 1, 10:38 AM', icon: '🛒' },
  { stage: 'Return', action: 'Returned via email link', time: 'Day 3, 3:20 PM', icon: '📧' },
  { stage: 'Purchase', action: 'Completed checkout', time: 'Day 3, 3:25 PM', icon: '✅' },
];