export interface SurveyOption {
  labelEn: string;
  labelZh: string;
  percentage: number;
  count: number;
  color: string;
  secondaryInfoEn?: string;
  secondaryInfoZh?: string;
}

export interface SurveyTopic {
  id: string;
  questionNumber: string;
  titleEn: string;
  titleZh: string;
  shortLabelEn: string;
  shortLabelZh: string;
  subtitleEn: string;
  subtitleZh: string;
  coreStat: string;
  coreStatLabelEn: string;
  coreStatLabelZh: string;
  descriptionEn: string;
  descriptionZh: string;
  insightEn: string;
  insightZh: string;
  quoteEn: string;
  quoteZh: string;
  options: SurveyOption[];
  crossAnalysisEn?: string;
  crossAnalysisZh?: string;
}

export interface MissionPillar {
  id: string;
  number: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  iconName: string;
  bgColor: string;
  accentColor: string;
  dataEvidenceEn: string;
  dataEvidenceZh: string;
  descriptionEn: string;
  descriptionZh: string;
  actionsEn: string[];
  actionsZh: string[];
}

export const SURVEY_METADATA = {
  titleEn: "WLSA Student Uniform Loss & Recycling Survey Report",
  titleZh: "WLSA 学生校服丢失与循环利用调查问卷",
  sampleSize: 96,
  date: "2026-08-25",
  sourceEn: "WLSA Campus Student Survey (96 Valid Questionnaires)",
  sourceZh: "WLSA 校园学生问卷星线上调研平台（回收有效问卷96份）",
  coreFindingQuoteEn: "Over 83% of students demand uniform exchange platforms, and 81% are eager to donate upon graduation. Yet 58% face extreme recovery hurdles and 60% are forced to buy expensive new uniforms.",
  coreFindingQuoteZh: "超83%的学生希望有校服交换渠道，超81%愿在毕业后捐献校服；然而58%的学生面临找回困境，60%不得不花高价重新购买新校服。"
};

export const CORE_KPIS = [
  {
    id: "loss_freq",
    value: "71.88%",
    labelEn: "Low Loss Rate (1-2x/mo)",
    labelZh: "校服低频丢失率 (1-2次/月)",
    subtextEn: "Only 3.13% lose >5 times/month",
    subtextZh: "仅3.13%学生每月丢失大于5次",
    color: "emerald",
    icon: "ShieldAlert"
  },
  {
    id: "recovery_diff",
    value: "58.33%",
    labelEn: "Fail to Recover Uniforms",
    labelZh: "难以找回丢失校服",
    subtextEn: "33.3% often fail, 25.0% never find",
    subtextZh: "33.3%经常不能找回，25%从未找回",
    color: "rose",
    icon: "SearchX"
  },
  {
    id: "buy_new",
    value: "60.42%",
    labelEn: "Forced to Repurchase New",
    labelZh: "官网重买新校服为主流",
    subtextEn: "21.88% take zero action / give up",
    subtextZh: "21.88%学生采取消极不作为态度",
    color: "amber",
    icon: "ShoppingBag"
  },
  {
    id: "acceptance",
    value: "68.75%",
    labelEn: "Accept Pre-Loved Uniforms",
    labelZh: "接纳干净消毒旧校服",
    subtextEn: "Strong foundation for circular reuse",
    subtextZh: "具备开展二手循环的扎实群众基础",
    color: "teal",
    icon: "HeartHandshake"
  },
  {
    id: "cleaning_fee",
    value: "71.87%",
    labelEn: "Willing to Pay Cleaning Fee",
    labelZh: "愿支付10元清洗消毒费",
    subtextEn: "Hygiene trust is the key factor, not cost",
    subtextZh: "核心障碍在于卫生信任，而非费用门槛",
    color: "blue",
    icon: "Sparkles"
  },
  {
    id: "swap_demand",
    value: "83.33%",
    labelEn: "Demand Uniform Swap Channel",
    labelZh: "极度渴望校服交换平台",
    subtextEn: "81.25% also willing to donate at graduation",
    subtextZh: "81.25%学生毕业后极乐意捐赠闲置校服",
    color: "purple",
    icon: "Recycle"
  }
];

export const SURVEY_TOPICS: SurveyTopic[] = [
  {
    id: "q1_loss_frequency",
    questionNumber: "Q1",
    shortLabelEn: "Loss Frequency",
    shortLabelZh: "丢失频率",
    titleEn: "1. Student Uniform Loss Frequency",
    titleZh: "1. 学生校服丢失频率分布",
    subtitleEn: "How frequently do you misplace or lose your school uniform items in a month?",
    subtitleZh: "你一般在学校丢失校服的频率为多少？",
    coreStat: "71.88%",
    coreStatLabelEn: "Infrequent Loss (1-2x/month)",
    coreStatLabelZh: "很少丢失（每月1-2次）",
    descriptionEn: "71.88% of surveyed students rarely lose school uniforms (1-2 times per month), while 7.29% lose 3-5 times, and 3.13% lose over 5 times. Around 17.71% report zero loss or other scenarios. This demonstrates that school uniform loss is an occasional occurrence for most, but creates acute friction when it happens.",
    descriptionZh: "71.88%的学生表示很少丢失校服（一个月1-2次），7.29%为一般（3-5次），3.13%为较多（>5次），17.71%为其他/不丢失。说明校服丢失并非普遍极端高频问题，但约一成学生面临较频繁的丢失困扰，且丢失后的替代成本极高。",
    insightEn: "While extreme loss is concentrated in ~10% of high-frequency students, the vast majority experience sporadic loss where they urgently need an affordable, quick replacement solution.",
    insightZh: "绝大多数学生属于低频偶发丢失，但因为缺乏低成本的快速补救途径，一旦丢失便产生极大困扰与开支浪费。",
    quoteEn: "Conclusion from Q1: Frequency of losing school uniforms is mostly low-frequency (1-2x/month) for 71.88% of students.",
    quoteZh: "问卷Q1结论：绝大多数学生丢失校服频率较低，71.88%的学生极少丢失，仅约一成学生面临较频繁丢失困扰。",
    crossAnalysisEn: "Cross analysis indicates that students with lower loss frequency are significantly more likely to recover their items, whereas frequent losers encounter near 100% permanent loss.",
    crossAnalysisZh: "交叉分析表明：丢失频率越低的学生找回成功率越高，而高频丢失者几乎全军覆没面临无法找回。",
    options: [
      { labelEn: "Rarely (1-2 times/mo)", labelZh: "很少（一个月1-2次）", percentage: 71.88, count: 69, color: "#10B981", secondaryInfoEn: "Majority student baseline", secondaryInfoZh: "绝大多数学生常态" },
      { labelEn: "Other / Never", labelZh: "其他（从不丢/未填）", percentage: 17.71, count: 17, color: "#94A3B8", secondaryInfoEn: "Zero or special circumstances", secondaryInfoZh: "从不丢失或特殊情况" },
      { labelEn: "Moderate (3-5 times/mo)", labelZh: "一般（一个月3-5次）", percentage: 7.29, count: 7, color: "#F59E0B", secondaryInfoEn: "Needs care education", secondaryInfoZh: "需提醒与保管辅导" },
      { labelEn: "Frequent (>5 times/mo)", labelZh: "较多（一个月大于5次）", percentage: 3.13, count: 3, color: "#EF4444", secondaryInfoEn: "High-risk group", secondaryInfoZh: "重点帮扶与应急租借群体" }
    ]
  },
  {
    id: "q2_recovery_difficulty",
    questionNumber: "Q2",
    shortLabelEn: "Recovery Rate",
    shortLabelZh: "找回难度",
    titleEn: "2. Success Rate & Difficulty of Recovering Lost Uniforms",
    titleZh: "2. 校服找回情况与找回难度分析",
    subtitleEn: "When you lose a uniform, how often can you successfully retrieve it through lost & found?",
    subtitleZh: "当丢掉校服的时候，你一般能否通过失物招领或其他方式找回来？",
    coreStat: "58.33%",
    coreStatLabelEn: "Often/Never Recover",
    coreStatLabelZh: "经常不能或从未找回",
    descriptionEn: "Over 58.33% of students report being unable to recover their lost uniforms (33.33% 'often cannot', 25.00% 'never can'). Only 17.71% have consistent recovery success (7.29% 'always can', 10.42% 'often can'), with 23.96% at a 50/50 toss-up. This points to severe deficiencies in current campus lost-and-found mechanisms.",
    descriptionZh: "超过58%的学生选择“经常不能”（33.33%）和“从来不能”（25.00%）找回校服；而“一直能”和“经常能”合计不足18%。这表明现有校园失物招领体系存在明显短板，导致大量可正常穿戴的校服永久沉淀或遗失。",
    insightEn: "Current campus lost-and-found lacks digital item tracking, photo verification, and systematic sorting, resulting in over half of lost garments going completely to waste.",
    insightZh: "现行失物招领由于缺乏数字化登记、拍照认领与有序归类，导致超半数丢失校服被白白浪费或长期积压在角落。",
    quoteEn: "Conclusion from Q2: Over half of students (58.33%) rarely or never retrieve lost uniforms.",
    quoteZh: "问卷Q2结论：总体而言学生通过失物招领找回校服成功率较低，超过半数学生经常或从来不能找回。",
    crossAnalysisEn: "Among high-frequency loss students (>5x/month), 66.67% never find items and 33.33% rarely find them—a 100% severe difficulty rate.",
    crossAnalysisZh: "在每月丢失5次以上的学生中，66.67%从来不能找回，33.33%经常不能找回，100%陷入找回死胡同。",
    options: [
      { labelEn: "Often Cannot Recover", labelZh: "经常不能（找回较少）", percentage: 33.33, count: 32, color: "#F97316", secondaryInfoEn: "Stuck in retrieval gap", secondaryInfoZh: "严重缺乏有效招领渠道" },
      { labelEn: "Never Recover", labelZh: "从来不能（完全丢失）", percentage: 25.00, count: 24, color: "#EF4444", secondaryInfoEn: "Total item loss", secondaryInfoZh: "彻底丢失造成经济损失" },
      { labelEn: "50 / 50 Chance", labelZh: "五五开（看运气）", percentage: 23.96, count: 23, color: "#EAB308", secondaryInfoEn: "Unreliable tracking", secondaryInfoZh: "全凭偶然运气" },
      { labelEn: "Often Recover", labelZh: "经常能（较多找回）", percentage: 10.42, count: 10, color: "#3B82F6", secondaryInfoEn: "Prompt searchers", secondaryInfoZh: "寻找相对积极" },
      { labelEn: "Always Recover", labelZh: "一直能（总能找回）", percentage: 7.29, count: 7, color: "#10B981", secondaryInfoEn: "Named tag holders", secondaryInfoZh: "通常有专属姓名标签" }
    ]
  },
  {
    id: "q3_post_loss_solution",
    questionNumber: "Q3",
    shortLabelEn: "Post-Loss Solution",
    shortLabelZh: "解决方式",
    titleEn: "3. Coping Methods After Failing to Recover Uniform",
    titleZh: "3. 丢了校服且找不回来时的解决方式",
    subtitleEn: "When your uniform is lost and cannot be retrieved, what do you usually do?",
    subtitleZh: "当丢了校服且找不回来的时候，你是怎么解决的？",
    coreStat: "60.42%",
    coreStatLabelEn: "Buy Brand New Official Uniform",
    coreStatLabelZh: "官网购买全新校服（绝对主流）",
    descriptionEn: "Buying new uniforms from the official store is the predominant solution at 60.42%. Alarmingly, 21.88% take no action at all (passive abandonment), while borrowing from peers accounts for 5.21%, second-hand platforms 1.04%, asking seniors 1.04%, and others 10.42%.",
    descriptionZh: "官网购买新校服是绝对主流（占60.42%），其次是不采取措施消极应对（占21.88%），跟同学借占5.21%，闲鱼采购占1.04%，向高年级同学要占1.04%，其他占10.42%。",
    insightEn: "Families bear heavy recurring financial burdens buying new items at full retail price, while 1 in 5 students resort to non-compliance ('taking no action') because alternative affordable channels are missing.",
    insightZh: "家庭承担昂贵的全新校服全额重购成本，同时超过五分之一的学生因为缺乏便捷平价替代渠道而选择‘放弃不管’。",
    quoteEn: "Conclusion from Q3: Official store repurchase is the absolute mainstream (60.42%), followed by passive non-action (21.88%).",
    quoteZh: "问卷Q3结论：官网购买新校服是学生丢失校服后最主要的解决方式（60.42%），消极不采取措施占比达21.88%。",
    crossAnalysisEn: "Students facing harder recovery rates are markedly more likely to choose passive non-action. Providing cheap second-hand uniforms eliminates this dilemma.",
    crossAnalysisZh: "找回难度越大的学生越容易走向消极不作为；建立校服二手循环中心可直接激活这21.88%的沉睡需求。",
    options: [
      { labelEn: "Buy New on Official Store", labelZh: "官网购买全新校服", percentage: 60.42, count: 58, color: "#0284C7", secondaryInfoEn: "High recurring financial cost", secondaryInfoZh: "高昂全额重购成本" },
      { labelEn: "Take No Action / Give Up", labelZh: "不采取措施（消极应对）", percentage: 21.88, count: 21, color: "#64748B", secondaryInfoEn: "Lacks affordable alternative", secondaryInfoZh: "缺乏平价便捷替代途径" },
      { labelEn: "Other Methods", labelZh: "其他方式", percentage: 10.42, count: 10, color: "#A855F7", secondaryInfoEn: "Non-standard workarounds", secondaryInfoZh: "其他个性化处理" },
      { labelEn: "Borrow From Classmates", labelZh: "跟同学借用", percentage: 5.21, count: 5, color: "#10B981", secondaryInfoEn: "Temporary emergency measure", secondaryInfoZh: "临时应急借用" },
      { labelEn: "Online Secondhand (Xianyu)", labelZh: "闲鱼等二手平台采购", percentage: 1.04, count: 1, color: "#F59E0B", secondaryInfoEn: "Scattered & unverified quality", secondaryInfoZh: "渠道分散且无卫生保障" },
      { labelEn: "Ask Senior Students", labelZh: "向高年级同学要", percentage: 1.04, count: 1, color: "#EC4899", secondaryInfoEn: "Informal interpersonal swap", secondaryInfoZh: "私人非正规流转" }
    ]
  },
  {
    id: "q4_acceptance",
    questionNumber: "Q4",
    shortLabelEn: "Pre-Loved Acceptance",
    shortLabelZh: "旧校服接受度",
    titleEn: "4. Student Acceptance of Sanitized Pre-Loved Uniforms",
    titleZh: "4. 学生对干净消毒旧校服的接受意愿",
    subtitleEn: "Would you mind wearing clean, sanitized second-hand uniforms donated by seniors?",
    subtitleZh: "你会介意穿使用学长学姐捐献的但有轻微使用痕迹但清洗很干净的校服吗？",
    coreStat: "68.75%",
    coreStatLabelEn: "Do Not Mind (Positive)",
    coreStatLabelZh: "完全不介意（正面接纳）",
    descriptionEn: "68.75% of students do not mind wearing clean pre-loved uniforms with slight signs of use, 29.17% mind, and 2.08% chose other. This reveals broad campus acceptance for sustainable pre-loved clothing as long as professional sanitization is guaranteed.",
    descriptionZh: "68.75%的学生不介意穿有轻微使用痕迹但清洗干净的旧校服，29.17%介意，2.08%选择其他。表明绝大多数学生对旧校服持接纳态度，具备推行二手循环的深厚群众基础；近三成学生存在顾虑，需强化清洗消毒与透明化保障。",
    insightEn: "Nearly 7 out of 10 students actively embrace circular pre-loved garments. The remaining 30% hesitation stems from hygiene uncertainty rather than stigma.",
    insightZh: "近七成学生愿意穿二手校服。另外三成的心理顾虑并非身份标签问题，而是卫生消毒是否达标与透明。",
    quoteEn: "Conclusion from Q4: Nearly 70% of students accept pre-loved uniforms, confirming strong project viability.",
    quoteZh: "问卷Q4结论：近七成学生不介意穿轻微使用痕迹但清洗干净的旧校服，整体接受度较高，具备推行基础。",
    crossAnalysisEn: "Among students who don't mind pre-loved garments, 87.88% are willing to pay cleaning fees, demonstrating direct commercial and operational feasibility.",
    crossAnalysisZh: "在不介意旧校服的学生中，高达87.88%愿意支付清洗消毒费，表明项目具备极高的自主运转可行性。",
    options: [
      { labelEn: "Do Not Mind (Accept)", labelZh: "不介意（乐意穿戴）", percentage: 68.75, count: 66, color: "#059669", secondaryInfoEn: "66 students ready for circular use", secondaryInfoZh: "66位学生认可环保循环" },
      { labelEn: "Mind / Hesitant", labelZh: "介意（心存顾虑）", percentage: 29.17, count: 28, color: "#F43F5E", secondaryInfoEn: "Needs hygiene assurance", secondaryInfoZh: "需通过60°C消杀透明化化解" },
      { labelEn: "Other / Conditional", labelZh: "其他（看情况/成色）", percentage: 2.08, count: 2, color: "#94A3B8", secondaryInfoEn: "Depends on fabric condition", secondaryInfoZh: "视成色与破损程度而定" }
    ]
  },
  {
    id: "q5_cleaning_fee",
    questionNumber: "Q5",
    shortLabelEn: "Cleaning Fee Willingness",
    shortLabelZh: "清洗费意愿",
    titleEn: "5. Willingness to Pay Nominal Sanitization Fee (~¥10)",
    titleZh: "5. 支付小额清洗消毒费（如10元）获取旧校服意愿",
    subtitleEn: "If you could obtain clean, sanitized pre-loved uniforms at school, would you pay a ~¥10 cleaning fee?",
    subtitleZh: "假如你丢了校服，可以在学校领取一套学长学姐有轻微使用痕迹但消毒很干净的旧校服，你愿意出一小部分这些衣物的清洗费吗（比如10元）？",
    coreStat: "71.87%",
    coreStatLabelEn: "Willing to Pay (Positive)",
    coreStatLabelZh: "愿意/非常愿意支付（正面支持）",
    descriptionEn: "71.87% of students expressed willingness to pay a nominal ~10 RMB cleaning fee (20.83% 'very willing', 51.04% 'willing'). Only 16.67% were unwilling and 9.38% very unwilling. This proves that a low-cost, self-sustaining cleaning model is highly endorsed by students.",
    descriptionZh: "总体来看，71.87%的学生表示非常愿意或愿意支付清洗费，其中“愿意”占比高达51.04%，“非常愿意”占20.83%。负面态度合计仅26.05%。表明10元左右的平价消杀工本费在学生中具备极高接受度与落地可行性。",
    insightEn: "Compared to buying a new blazer for ¥300-¥600, a ¥10 nominal sanitization fee offers 98% savings for families while covering operational cleaning and packing costs.",
    insightZh: "相比重买新校服数百元的开支，10元象征性清洗费为家庭节省95%以上成本，同时可完美覆盖环保洗涤与密封袋运营支出。",
    quoteEn: "Conclusion from Q5: Over 70% of students support paying a 10 RMB sanitization fee.",
    quoteZh: "问卷Q5结论：超七成学生愿意支付10元清洗费获取消毒旧校服，核心障碍在于卫生信任而非费用本身。",
    crossAnalysisEn: "Willingness to pay cleaning fee correlates positively with pre-loved acceptance: 87.88% of accepting students gladly pay, versus 32.14% of hesitant students.",
    crossAnalysisZh: "清洗费支付意愿与旧校服接受度正相关：不介意旧校服的学生中87.88%愿付清洗费，介意者仅32.14%愿付。",
    options: [
      { labelEn: "Willing (¥10)", labelZh: "愿意（认可平价清洁费）", percentage: 51.04, count: 49, color: "#0284C7", secondaryInfoEn: "Cost-effective choice", secondaryInfoZh: "主流学生共识" },
      { labelEn: "Very Willing (¥10)", labelZh: "非常愿意（大力支持）", percentage: 20.83, count: 20, color: "#10B981", secondaryInfoEn: "Strong green supporters", secondaryInfoZh: "极具环保责任感群体" },
      { labelEn: "Unwilling", labelZh: "不愿意", percentage: 16.67, count: 16, color: "#F59E0B", secondaryInfoEn: "Prefers school budget cover", secondaryInfoZh: "期望学校全额免费配发" },
      { labelEn: "Very Unwilling", labelZh: "非常不愿意", percentage: 9.38, count: 9, color: "#EF4444", secondaryInfoEn: "Skeptical of payment", secondaryInfoZh: "不愿出资或坚持买新" },
      { labelEn: "Other", labelZh: "其他", percentage: 2.08, count: 2, color: "#94A3B8", secondaryInfoEn: "Special comments", secondaryInfoZh: "其他意见" }
    ]
  },
  {
    id: "q6_graduation_donation",
    questionNumber: "Q6",
    shortLabelEn: "Donation Willingness",
    shortLabelZh: "毕业捐献意愿",
    titleEn: "6. Willingness to Donate Uniforms Upon Graduation",
    titleZh: "6. 学生毕业后捐献闲置校服的意愿",
    subtitleEn: "After graduation, would you be willing to donate your outgrown/good condition uniforms to the recycling platform?",
    subtitleZh: "你毕业后愿意捐献自己较新的、或者没穿过的、或者有轻微使用痕迹但很干净的校服吗？",
    coreStat: "81.25%",
    coreStatLabelEn: "Willing to Donate (Positive)",
    coreStatLabelZh: "愿意/非常愿意捐赠（超八成）",
    descriptionEn: "Over 81.25% of students stated willingness to donate outgrown or clean pre-loved uniforms upon graduation (33.33% 'very willing', 47.92% 'willing'). Unwilling students accounted for only 12.50%, and very unwilling 4.17%. This guarantees a continuous, abundant supply of recycled garments.",
    descriptionZh: "本次调查中，“非常愿意”（33.33%）和“愿意”（47.92%）的学生合计占比超过八成（81.25%），总体捐献意愿极强。这为校服循环平台的持续供应提供了充足而可靠的衣物来源基础。",
    insightEn: "Campus supply is not a bottleneck. Seniors are enthusiastic about passing uniforms forward to juniors rather than discarding them in trash bins.",
    insightZh: "校服货源供给完全不成问题。毕业生极具分享善意与传承意愿，渴望将优质衣物托付给学弟学妹而非扔入垃圾桶。",
    quoteEn: "Conclusion from Q6: The vast majority (>81%) want to donate uniforms after graduation.",
    quoteZh: "问卷Q6结论：绝大多数学生愿意在毕业后捐献校服（合计81.25%），循环利用意识显著呈现正相关。",
    crossAnalysisEn: "Students who are willing to donate also show 80.65% support for paying cleaning fees when acquiring other items, demonstrating a robust circular loop.",
    crossAnalysisZh: "愿意捐献校服的学生中，对支付清洗费的正面支持率亦超过78%，形成了‘既愿捐赠、又愿互助’的良性循环。",
    options: [
      { labelEn: "Willing to Donate", labelZh: "愿意捐献", percentage: 47.92, count: 46, color: "#10B981", secondaryInfoEn: "Solid community supply base", secondaryInfoZh: "扎实的社区货源保障" },
      { labelEn: "Very Willing to Donate", labelZh: "非常愿意（积极响应）", percentage: 33.33, count: 32, color: "#059669", secondaryInfoEn: "Eco champions & student leaders", secondaryInfoZh: "校园环保先锋带头人" },
      { labelEn: "Unwilling", labelZh: "不愿意", percentage: 12.50, count: 12, color: "#F59E0B", secondaryInfoEn: "Keeps as souvenir", secondaryInfoZh: "留作毕业纪念等原因" },
      { labelEn: "Very Unwilling", labelZh: "非常不愿意", percentage: 4.17, count: 4, color: "#EF4444", secondaryInfoEn: "Reluctant to share", secondaryInfoZh: "缺乏分享意向" },
      { labelEn: "Other", labelZh: "其他", percentage: 2.08, count: 2, color: "#94A3B8", secondaryInfoEn: "Conditional response", secondaryInfoZh: "视届时衣物状态" }
    ]
  },
  {
    id: "q7_swap_demand",
    questionNumber: "Q7",
    shortLabelEn: "Swap Platform Demand",
    shortLabelZh: "校服交换需求",
    titleEn: "7. Demand for School Uniform Exchange & Swap Channels",
    titleZh: "7. 建立校服交换/调剂平台的需求迫切度",
    subtitleEn: "If your uniform becomes too small or big during school, do you desire an official platform to exchange sizes?",
    subtitleZh: "在校期间，如果你的校服买大或者买小了，希望有地方能进行交换吗？",
    coreStat: "83.33%",
    coreStatLabelEn: "Desire Exchange Platform",
    coreStatLabelZh: "强烈希望建立交换平台（超83%）",
    descriptionEn: "An overwhelming 83.33% of students hope for a designated uniform exchange channel (32.29% 'strongly hope', 51.04% 'hope'). Not a single student (0.00%) was strongly opposed! Only 10.42% did not feel the need. This represents an undeniable student mandate.",
    descriptionZh: "在本次调查中，选择“非常希望”（32.29%）和“希望”（51.04%）的学生合计占比达83.33%，而“非常不希望”为0.00%（全校零反对）！这表明学生对校服尺码调剂与二手交换存在极其强烈的刚性需求。",
    insightEn: "0.00% strong opposition proves uniform recycling and size-swapping is a universally welcome public service initiative for the entire student body.",
    insightZh: "‘0.00%强烈反对’的数据极具说服力，证明校服调剂交换平台是一项全校众望所归、有百利而无一害的公用民生举措。",
    quoteEn: "Conclusion from Q7: Over 83% of students strongly desire uniform exchange channels.",
    quoteZh: "问卷Q7结论：绝大多数学生希望有交换校服的渠道（83.33%），校方与学生组织应重点搭建相应平台或机制。",
    crossAnalysisEn: "Regardless of past loss history, students across all grades express 85%+ demand for size exchange, making it a cornerstone feature.",
    crossAnalysisZh: "无论是何种年级或何种丢失经历，85%以上的群体均对尺码调剂表达了迫切诉求，成为平台的核心支柱功能。",
    options: [
      { labelEn: "Hope for Exchange Channel", labelZh: "希望有交换渠道", percentage: 51.04, count: 49, color: "#6366F1", secondaryInfoEn: "Solves sizing & growth issues", secondaryInfoZh: "解决快速生长发育尺码不合" },
      { labelEn: "Strongly Hope (Urgent)", labelZh: "非常希望（迫切需求）", percentage: 32.29, count: 31, color: "#8B5CF6", secondaryInfoEn: "Highest enthusiasm group", secondaryInfoZh: "迫切期待立即上线" },
      { labelEn: "Do Not Feel Need", labelZh: "不希望 / 暂不需要", percentage: 10.42, count: 10, color: "#94A3B8", secondaryInfoEn: "Adequate existing supply", secondaryInfoZh: "已有足够备用校服" },
      { labelEn: "Other", labelZh: "其他意见", percentage: 6.25, count: 6, color: "#CBD5E1", secondaryInfoEn: "Alternative suggestions", secondaryInfoZh: "其他建议" },
      { labelEn: "Strongly Against", labelZh: "非常不希望（强烈反对）", percentage: 0.00, count: 0, color: "#EF4444", secondaryInfoEn: "0% opposition across campus", secondaryInfoZh: "全校零反对，高度一致认同" }
    ]
  }
];

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: "pillar_1",
    number: "01",
    titleEn: "Build Integrated One-Stop Uniform Recycling & Swap Platform",
    titleZh: "建设校服回收、清洗、交换调剂一体化平台",
    subtitleEn: "Addressing 83.3% Swap Demand & 81.3% Donation Willingness",
    subtitleZh: "响应超83%交换需求与超81%毕业捐献意愿",
    iconName: "Recycle",
    bgColor: "bg-emerald-50",
    accentColor: "text-emerald-700 border-emerald-200",
    dataEvidenceEn: "Survey revealed 83.33% of students want uniform exchange channels, while 60.42% currently suffer high costs buying new uniforms from official stores.",
    dataEvidenceZh: "问卷显示83.33%学生迫切需要交换渠道，而目前60.42%只能高价在官网重买新校服，造成家庭经济与资源巨大浪费。",
    descriptionEn: "We establish a seamless digital and on-campus platform where students can donate outgrown uniforms, swap sizes during rapid growth spurts, and purchase inspected pre-loved garments at a fraction of retail price.",
    descriptionZh: "搭建线上+线下结合的一体化校服循环网络，满足学生尺码调剂、闲置捐献与平价采购的多重需求，将原本高昂的重买成本降低80%以上。",
    actionsEn: [
      "Online catalog with size filters and school crest verification",
      "Reception desk drop-off and instant verification workflow",
      "Instant Starter Bundles for 3-item essentials at extra discount"
    ],
    actionsZh: [
      "设立在线校服商城与尺码快速调剂分类筛选",
      "合作学校前台接待处一站式捐赠接收与登记",
      "推出高性价比入门校服3件套组合包（额外15%优惠）"
    ]
  },
  {
    id: "pillar_2",
    number: "02",
    titleEn: "Eliminate Hygiene & Psychological Barriers via Certified Sanitization",
    titleZh: "消除卫生与心理障碍 · 严格执行60°C高温消毒标准",
    subtitleEn: "Empowering 71.9% Willingness to Pay 10 RMB Cleaning Fee",
    subtitleZh: "化解近三成学生的顾虑，打造全透明洗消流程",
    iconName: "Sparkles",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-700 border-blue-200",
    dataEvidenceEn: "68.75% don't mind pre-loved uniforms and 71.87% are glad to pay a ¥10 sanitization fee. The main hesitation of the 29.17% minority is hygiene transparency, not price.",
    dataEvidenceZh: "近七成学生不介意穿旧校服，超七成愿付10元清洁费。近三成介意者的核心顾虑在于‘卫生是否过关’，而非面子或心理排斥。",
    descriptionEn: "Every garment undergoes standard 60°C steam medical disinfection, fabric inspection, and tamper-evident eco sealing. We publicize sanitization logs and offer a risk-free 'try before final pay' policy.",
    descriptionZh: "所有回收衣物100%执行60°C高温蒸汽消杀与除菌检测，配备环保密封防尘包装与检验溯源码。同时推出‘无忧试穿退换’机制消除顾虑。",
    actionsEn: [
      "Strict 60°C medical-grade steam sanitization & UV disinfection",
      "Transparent inspection tags with sanitized date stamping",
      "Try-on guarantee with zero-risk returns & exchanges"
    ],
    actionsZh: [
      "严苛的60°C高温蒸气深度清洁与紫外线消杀工序",
      "每件衣物附带独立消杀日期与成色质检认证标签",
      "提供‘先试穿后确认’与无条件退换机制，降低心理门槛"
    ]
  },
  {
    id: "pillar_3",
    number: "03",
    titleEn: "Smart Lost & Found Coordination + Care & Custody Education",
    titleZh: "完善失物招领机制与校服保管教育",
    subtitleEn: "Tackling the 58.3% Recovery Failure Bottleneck",
    subtitleZh: "解决58.3%学生找不回校服的长期痛点",
    iconName: "Search",
    bgColor: "bg-amber-50",
    accentColor: "text-amber-700 border-amber-200",
    dataEvidenceEn: "Over 58% of students report being unable to retrieve lost garments, and 100% of high-frequency loss students face total recovery failure.",
    dataEvidenceZh: "超58%学生表示经常或从未找回丢失校服，高频丢失者找回难度更是达到100%，现行招领体系严重失效。",
    descriptionEn: "We integrate digital lost & found tracking, photo catalogs, smart name-label stickers, and organized storage shelves at school reception desks to dramatically raise item recovery rates.",
    descriptionZh: "在校园建立专人管理的失物招领数字化平台，提供耐高温洗水姓名贴、固定存放架与即时失物广播，大幅提升校服找回率。",
    actionsEn: [
      "Digital Lost & Found photo log with real-time school desk sync",
      "Free heat-resistant waterproof iron-on name tags for freshmen",
      "Campus uniform custody workshops & designated locker habits"
    ],
    actionsZh: [
      "设立校园失物招领数字化拍照图库与前台即时同步",
      "为新生发放防丢热转印防水姓名贴与专属防丢工具",
      "开展校服保管主题讲座，培养学生固定收纳与名牌标识习惯"
    ]
  },
  {
    id: "pillar_4",
    number: "04",
    titleEn: "Precision Emergency Loan & Support for Passive / High-Loss Groups",
    titleZh: "精准干预消极群体 · 设立应急校服借用通道",
    subtitleEn: "Rescuing the 21.9% Who 'Take Zero Action'",
    subtitleZh: "激活21.88%‘放弃不管’的消极群体，消除合规真空",
    iconName: "HeartPulse",
    bgColor: "bg-rose-50",
    accentColor: "text-rose-700 border-rose-200",
    dataEvidenceEn: "21.88% of students resort to 'taking no action' when uniforms are lost because new ones are too expensive and temporary loans are unavailable.",
    dataEvidenceZh: "高达21.88%的学生因重买成本过高或流程繁琐而选择‘不采取措施’，甚至因缺校服影响日常教学与升旗礼仪。",
    descriptionEn: "Uniform Recycle establishes a campus Emergency Loan Reserve where students can borrow sanitized spares immediately for events, exams, or laundry cycles with nominal or waived deposit.",
    descriptionZh: "设立‘校园应急校服备用库’，为突发遗失或破损的学生提供即时借用与按周短租服务，对经济困难学生开通绿色减免通道。",
    actionsEn: [
      "Same-day Emergency Uniform Loan desk at school reception",
      "Subsidized & fee-waived cleaning credits for families in need",
      "Gentle advisory outreach for repeat loss students"
    ],
    actionsZh: [
      "学校前台设立‘当日应急校服出借处’，即取即穿",
      "为经济困难或特殊家庭提供清洗费全额减免爱心通道",
      "针对高频丢失学生提供专属关怀，协助制定防丢保管方案"
    ]
  },
  {
    id: "pillar_5",
    number: "05",
    titleEn: "Cultivate Campus Circular Culture & Eco-Credit Incentives",
    titleZh: "培育校园循环低碳文化 · 建立绿色积分与义卖机制",
    subtitleEn: "Transforming Waste into Long-term Sustainability",
    subtitleZh: "将闲置衣物转化为绿色财富，树立全校可持续发展共识",
    iconName: "Leaf",
    bgColor: "bg-teal-50",
    accentColor: "text-teal-700 border-teal-200",
    dataEvidenceEn: "81.25% graduation donation willingness and high eco-awareness prove students are eager to contribute when positive social recognition is provided.",
    dataEvidenceZh: "81.25%的高毕业捐赠意愿和显著的环保认同感表明，学生渴望通过绿色行动获得社区认同与公益价值感。",
    descriptionEn: "We organize annual Graduation Uniform Drives, reward student donors with Eco-Contribution Certificates and reward points, and donate proceeds toward campus green initiatives.",
    descriptionZh: "定期开展‘毕业季绿色捐赠周’与‘校服跳蚤集市’，为捐赠者颁发环保积分与电子证书，收益全额反哺校园环保与助学基金。",
    actionsEn: [
      "Annual Graduation Uniform Drive with Eco-Certificate issuance",
      "Interactive Eco-Impact Calculator measuring liters of water & CO2 offset",
      "Student volunteer team running seasonal uniform exchange pop-ups"
    ],
    actionsZh: [
      "举办年度毕业季校服义捐周，颁发‘低碳先锋’电子荣誉证书",
      "集成校园环保计算器，实时量化节水加仑数与碳减排千克数",
      "组建学生绿色义工团，常态化运营校园校服快闪交换站"
    ]
  }
];

export const CROSS_ANALYSIS_DATA = {
  titleEn: "Cross-Variable Correlation Insights",
  titleZh: "问卷核心交叉分析与深度洞察",
  items: [
    {
      titleEn: "Recovery Rate vs Loss Frequency",
      titleZh: "找回难度与丢失频率的显著分化",
      findingEn: "Students with rare loss (1-2x) maintain a 45%+ recovery rate, while frequent losers (>5x) encounter 100% permanent loss. Specialized custody training and tracking labels are urgent for vulnerable groups.",
      findingZh: "低频丢失学生（1-2次）有超45%的找回可能；但高频丢失学生（>5次）中66.67%从未找回，33.33%经常不能找回（100%陷入找回障碍）。对高频群体进行专项保管辅导与贴标签刻不容缓。"
    },
    {
      titleEn: "Sanitization Fee vs Acceptance",
      titleZh: "清洗费意愿与旧校服接受度高度正相关",
      findingEn: "87.88% of students who accept pre-loved uniforms gladly pay the ¥10 sanitization fee. The ¥10 fee is regarded as reasonable and necessary for guaranteeing hygienic steam treatment.",
      findingZh: "在不介意旧校服的学生中，87.88%愿意支付10元清洗费；而在介意旧校服的学生中，仅32.14%愿意支付。说明10元工本费完全被认可用于保障高温消杀品质。"
    },
    {
      titleEn: "Donation Intent vs Swap Demand",
      titleZh: "捐赠意愿（81%）与交换需求（83%）形成闭环",
      findingEn: "81.25% willingness to donate upon graduation paired with 83.33% swap demand proves that supply and demand in the circular uniform market are perfectly aligned.",
      findingZh: "81.25%的毕业捐赠意向与83.33%的在校交换需求，证明校园二手校服不仅‘有需求’，而且‘有货源’，平台具备极佳的内生循环动力。"
    }
  ]
};
