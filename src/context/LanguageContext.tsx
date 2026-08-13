import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top banner & Nav
    'banner.active': 'Community Uniform Recycling & Swap Drive Active! Free delivery on school pickup orders.',
    'banner.donateLink': 'Donate Pre-Loved Uniforms →',
    'nav.recycling': 'Uniform Recycling',
    'nav.hub': 'Community Hub',
    'nav.store': 'Uniform Store',
    'nav.eco': 'Eco Impact',
    'nav.contact': 'Contact & Drop-offs',
    'nav.trackOrder': 'Track Order',
    'nav.basket': 'Basket',
    'nav.donate': 'Donate Items',
    'nav.language': 'Language / 语言',

    // Hero section
    'hero.badge': 'Official School Uniform Recycling Drive',
    'hero.title': 'UNIFORM RECYCLING',
    'hero.subtitle': 'Smart for Your Wallet. Kind to Our Planet.',
    'hero.intro1': "Welcome to our school's official Uniform Recycling Initiative! Children outgrow school blazers, sweaters, and PE kits every few months. Instead of letting top-quality uniforms sit unused in closets or end up in landfills, our community initiative gives them a fresh second life.",
    'hero.intro2': 'Save up to 80% on official school blazers, ties, jumpers, and sports kit. Every single item donated is thoroughly inspected, repaired, and steam-sanitized at 60°C to look and feel brand new.',
    'hero.searchPlaceholder': 'Search school name, blazer, PE kit, size...',
    'hero.searchButton': 'Search',
    'hero.popular': 'Popular:',
    'hero.blazers': 'Blazers',
    'hero.jumpers': 'Jumpers',
    'hero.peKits': 'PE Kits',
    'hero.browseStore': 'Browse Pre-Loved Uniforms',
    'hero.donateItems': 'Donate Outgrown Items',
    'hero.statItems': 'Recycled & Re-loved',
    'hero.statSavings': 'Family Savings',

    // Store Catalog
    'store.title': 'Pre-Loved School Uniform Catalog',
    'store.subtitle': 'Search quality-verified pre-loved school uniforms from local partner schools. Every item is cleaned, inspected, and sanitized.',
    'store.searchLabel': 'Search Uniforms',
    'store.allSchools': 'All Partner Schools',
    'store.allCategories': 'All Categories',
    'store.allGenders': 'All Genders',
    'store.allConditions': 'All Conditions',
    'store.maxPrice': 'Max Price:',
    'store.sortBy': 'Sort By',
    'store.sortPriceAsc': 'Price: Low to High',
    'store.sortPriceDesc': 'Price: High to Low',
    'store.sortCondition': 'Best Condition First',
    'store.sortNewest': 'Newest Added',
    'store.badgeOnly': 'Badge Included Only',
    'store.clearFilters': 'Clear All Filters',
    'store.noResults': 'No uniform items matched your filters.',
    'store.tryAdjusting': 'Try adjusting your search keywords, school selection, or category filters.',
    'store.addToBasket': 'Add to Basket',
    'store.viewDetails': 'View Details',
    'store.sanitized': 'Sanitized 60°C',
    'store.likeNew': 'Like New',
    'store.veryGood': 'Very Good',
    'store.good': 'Good',
    'store.bundleTitle': 'Instant School Starter Bundle',
    'store.bundleDesc': 'Get 3 complementary uniform essentials for your selected school with an extra 15% discount!',
    'store.addBundle': 'Add Starter Bundle to Basket',

    // Categories
    'cat.blazer': 'Blazers & Jackets',
    'cat.jumper': 'Jumpers & Sweaters',
    'cat.polo': 'Polo Shirts & Shirts',
    'cat.trouser': 'Trousers & Shorts',
    'cat.skirt': 'Skirts & Dresses',
    'cat.pe_kit': 'PE & Sports Kits',
    'cat.accessory': 'Ties & Accessories',

    // Eco Calculator
    'eco.title': 'Community Eco & Wallet Impact Calculator',
    'eco.subtitle': 'See how much water, carbon emissions, and family budget you save by participating in our uniform recycling drive.',
    'eco.itemCount': 'Number of Uniform Items Saved / Donated:',
    'eco.waterSaved': 'Gallons of Water Saved',
    'eco.co2Offset': 'kg CO₂ Emissions Prevented',
    'eco.moneySaved': 'Saved for Families',
    'eco.equivalent': 'Equivalent to',
    'eco.showers': 'average showers saved',
    'eco.miles': 'miles driven by an average car',

    // Contact & Drop-off
    'contact.title': 'School Drop-off Locations & Contact',
    'contact.subtitle': 'Have outgrown uniforms to donate or questions about your order? Visit one of our school collection desks or reach out.',
    'contact.formTitle': 'Send Us a Message',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.school': 'Associated School (Optional)',
    'contact.message': 'Message or Inquiry',
    'contact.send': 'Send Inquiry',
    'contact.success': 'Inquiry received! Our team will respond shortly.',
    'contact.dropoffHours': 'Drop-off Hours',
    'contact.contactEmail': 'Contact Email',

    // Modals
    'cart.title': 'Your Shopping Basket',
    'cart.empty': 'Your basket is empty.',
    'cart.checkout': 'Proceed to Checkout',
    'cart.subtotal': 'Subtotal',
    'cart.delivery': 'Delivery',
    'cart.freeSchoolPickup': 'Free (School Desk Pickup)',
    'cart.total': 'Total',
    'cart.placeOrder': 'Place Uniform Order',
    'cart.orderSuccess': 'Order Placed Successfully!',

    'donation.title': 'Donate / Swap Pre-Loved Uniforms',
    'donation.subtitle': 'Help other families save money and keep garments out of landfills.',
    'donation.donorInfo': 'Donor Information',
    'donation.fullName': 'Full Name',
    'donation.phone': 'Phone Number',
    'donation.selectSchool': 'Select School',
    'donation.pickupMethod': 'Collection Method',
    'donation.schoolDropoff': 'Drop off at School Reception',
    'donation.homePickup': 'Home Courier Pickup',
    'donation.addItem': 'Add Item to Donation List',
    'donation.submit': 'Generate Donation Pass',

    'tracker.title': 'Track Your Uniform Order',
    'tracker.searchPlaceholder': 'Enter Order ID (e.g., UNIFORM-8492)',
    'tracker.searchButton': 'Find Order',

    'saved.title': 'Your Saved Wishlist',
    'saved.empty': 'You have no saved uniform items.',

    // Footer
    'footer.tagline': 'Empowering communities through sustainable, accessible, and high-quality pre-loved school uniforms.',
    'footer.quickLinks': 'Quick Links',
    'footer.partnerSchools': 'Partner Schools',
    'footer.sanitizationStd': '60°C Steam Sanitization Certified',
    'footer.copyright': 'Official School Uniform Recycling Drive. All rights reserved.',
  },
  zh: {
    // Top banner & Nav
    'banner.active': '社区校服回收与义卖行动进行中！学校自取订单享免费送达服务。',
    'banner.donateLink': '捐赠闲置校服 →',
    'nav.recycling': '校服循环回收',
    'nav.hub': '社区中心',
    'nav.store': '校服商城',
    'nav.eco': '环保效益',
    'nav.contact': '联系与回收点',
    'nav.trackOrder': '订单查询',
    'nav.basket': '购物车',
    'nav.donate': '捐赠校服',
    'nav.language': '语言 / Language',

    // Hero section
    'hero.badge': '官方学校校服回收行动',
    'hero.title': '校服循环回收',
    'hero.subtitle': '省钱又环保 · 让校服焕发新生',
    'hero.intro1': '欢迎来到官方校服循环回收计划！孩子们每隔几个月就会长高并换新校服。与其让优质的校服闲置在衣柜或造成垃圾浪费，我们的社区计划让它们重新焕发活力。',
    'hero.intro2': '购买官方校服外套、领带、毛衣及体育服可节省高达80%的开支。所有捐赠物品均经过严格检查、修复和60°C高温蒸气消毒，品质焕然一新。',
    'hero.searchPlaceholder': '搜索学校名称、西装外套、运动服、尺寸...',
    'hero.searchButton': '搜索',
    'hero.popular': '热门搜索：',
    'hero.blazers': '西装外套',
    'hero.jumpers': '针织毛衣',
    'hero.peKits': '运动服套装',
    'hero.browseStore': '浏览二手校服',
    'hero.donateItems': '捐赠闲置校服',
    'hero.statItems': '回收重获新生',
    'hero.statSavings': '家庭累计节省',

    // Store Catalog
    'store.title': '品质二手校服商城',
    'store.subtitle': '浏览来自合作学校的经严查消毒的二手校服。每件物品均完成清洁、修复与消毒。',
    'store.searchLabel': '搜索校服',
    'store.allSchools': '所有合作学校',
    'store.allCategories': '所有类别',
    'store.allGenders': '所有性别',
    'store.allConditions': '所有成色',
    'store.maxPrice': '最高价格：',
    'store.sortBy': '排序方式',
    'store.sortPriceAsc': '价格：从低到高',
    'store.sortPriceDesc': '价格：从高到低',
    'store.sortCondition': '品质最佳优先',
    'store.sortNewest': '最新上架',
    'store.badgeOnly': '仅显示带校徽项目',
    'store.clearFilters': '清除所有筛选',
    'store.noResults': '未找到符合条件的校服。',
    'store.tryAdjusting': '请尝试调整搜索关键字、学校选择或类别筛选条件。',
    'store.addToBasket': '加入购物车',
    'store.viewDetails': '查看详情',
    'store.sanitized': '60°C蒸气消毒',
    'store.likeNew': '九成新/极佳',
    'store.veryGood': '良好',
    'store.good': '正常使用',
    'store.bundleTitle': '快捷入学校服套装',
    'store.bundleDesc': '一键选购所选学校的3件校服必备组合，额外再享15%折扣！',
    'store.addBundle': '一键加购套装至购物车',

    // Categories
    'cat.blazer': '西装外套',
    'cat.jumper': '毛衣与针织衫',
    'cat.polo': 'Polo衫与衬衫',
    'cat.trouser': '长裤与短裤',
    'cat.skirt': '裙子与百褶裙',
    'cat.pe_kit': '体育服与运动套装',
    'cat.accessory': '领带与配件',

    // Eco Calculator
    'eco.title': '社区环保与家庭开支计算器',
    'eco.subtitle': '查看参与校服回收计划为您和社区带来的水资源节约、碳减排和开支节省。',
    'eco.itemCount': '回收/捐赠校服数量：',
    'eco.waterSaved': '节约水资源（加仑）',
    'eco.co2Offset': '减少二氧化碳排放（公斤）',
    'eco.moneySaved': '为家庭节省开支',
    'eco.equivalent': '相当于',
    'eco.showers': '次淋浴用水量',
    'eco.miles': '英里普通汽车行驶碳排放',

    // Contact & Drop-off
    'contact.title': '学校回收点与联系方式',
    'contact.subtitle': '有闲置校服需要捐赠，或对订单有疑问？欢迎前往我们的学校接待处回收点或联系我们。',
    'contact.formTitle': '发送留言联系我们',
    'contact.name': '您的姓名',
    'contact.email': '电子邮箱',
    'contact.school': '所属学校（选填）',
    'contact.message': '留言内容',
    'contact.send': '发送留言',
    'contact.success': '留言已收到！我们的团队将尽快与您联系。',
    'contact.dropoffHours': '回收点开放时间',
    'contact.contactEmail': '联系邮箱',

    // Modals
    'cart.title': '您的购物车',
    'cart.empty': '购物车暂无商品。',
    'cart.checkout': '前往结算',
    'cart.subtotal': '小计',
    'cart.delivery': '配送服务',
    'cart.freeSchoolPickup': '免费（学校前台自取）',
    'cart.total': '总计',
    'cart.placeOrder': '提交校服订单',
    'cart.orderSuccess': '订单提交成功！',

    'donation.title': '捐赠 / 交换二手校服',
    'donation.subtitle': '帮助其他家庭节省开支，减少纺织品垃圾。',
    'donation.donorInfo': '捐赠者信息',
    'donation.fullName': '姓名',
    'donation.phone': '电话号码',
    'donation.selectSchool': '选择所属学校',
    'donation.pickupMethod': '回收方式',
    'donation.schoolDropoff': '亲自送至学校前台',
    'donation.homePickup': '预约快递上门接收',
    'donation.addItem': '添加捐赠校服项目',
    'donation.submit': '生成捐赠凭证',

    'tracker.title': '查询校服订单进度',
    'tracker.searchPlaceholder': '输入订单编号（例如：UNIFORM-8492）',
    'tracker.searchButton': '查询订单',

    'saved.title': '我的收藏清单',
    'saved.empty': '暂无收藏的校服项目。',

    // Footer
    'footer.tagline': '通过可持续、高性价比且优质的二手校服服务，赋能社区发展。',
    'footer.quickLinks': '快速链接',
    'footer.partnerSchools': '合作学校',
    'footer.sanitizationStd': '认证60°C高温蒸气消毒标准',
    'footer.copyright': '官方学校校服回收行动。保留所有权利。',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('greenthread_lang');
      return (saved === 'zh' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('greenthread_lang', language);
    } catch (e) {
      console.error(e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  const t = (key: string, defaultText?: string): string => {
    return translations[language]?.[key] || defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
