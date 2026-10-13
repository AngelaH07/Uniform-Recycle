import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, 
  PieChart, Pie, Legend, CartesianGrid 
} from 'recharts';
import { 
  SURVEY_METADATA, 
  CORE_KPIS, 
  SURVEY_TOPICS, 
  MISSION_PILLARS, 
  CROSS_ANALYSIS_DATA,
  SurveyTopic,
  SurveyOption 
} from '../data/surveyData';
import { useLanguage } from '../context/LanguageContext';
import { 
  FileText, BarChart3, Table as TableIcon, CheckCircle2, 
  ArrowRight, ShieldCheck, HeartHandshake, Sparkles, 
  TrendingUp, HelpCircle, Layers, Check, ShoppingBag, 
  Recycle, AlertTriangle, Lightbulb, Users, Info, ChevronRight,
  Filter, Award, Clock, ArrowDownRight, RefreshCw
} from 'lucide-react';

interface ResearchMissionSectionProps {
  scrollToStore?: () => void;
  openDonationModal?: () => void;
  openCalculator?: () => void;
}

export const ResearchMissionSection: React.FC<ResearchMissionSectionProps> = ({
  scrollToStore,
  openDonationModal,
  openCalculator
}) => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  // Global exhibition mode: 'graph' | 'data' | 'split'
  const [globalViewMode, setGlobalViewMode] = useState<'graph' | 'data'>('graph');

  // Per-question toggle state overrides: Record<topicId, 'graph' | 'data'>
  const [topicViewModes, setTopicViewModes] = useState<Record<string, 'graph' | 'data'>>({});

  // Active filtered topic (all or specific Q1-Q7)
  const [activeFilterId, setActiveFilterId] = useState<string>('all');

  // Chart type switcher: 'donut' | 'bar'
  const [chartType, setChartType] = useState<'donut' | 'bar'>('donut');

  // Helper to get view mode for a specific topic
  const getTopicMode = (topicId: string) => {
    return topicViewModes[topicId] || globalViewMode;
  };

  const setTopicMode = (topicId: string, mode: 'graph' | 'data') => {
    setTopicViewModes(prev => ({ ...prev, [topicId]: mode }));
  };

  const handleGlobalModeChange = (mode: 'graph' | 'data') => {
    setGlobalViewMode(mode);
    // Reset individual overrides to follow the global mode
    const resetModes: Record<string, 'graph' | 'data'> = {};
    SURVEY_TOPICS.forEach(t => {
      resetModes[t.id] = mode;
    });
    setTopicViewModes(resetModes);
  };

  const displayedTopics = activeFilterId === 'all' 
    ? SURVEY_TOPICS 
    : SURVEY_TOPICS.filter(t => t.id === activeFilterId);

  // Custom Chart Tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data: SurveyOption = payload[0].payload;
      return (
        <div className="bg-slate-900/95 text-white p-3.5 rounded-xl shadow-xl border border-slate-700 text-xs max-w-xs backdrop-blur-md">
          <div className="flex items-center gap-2 font-bold mb-1.5">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: data.color }} />
            <span className="text-slate-100">{isZh ? data.labelZh : data.labelEn}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300 py-1 border-t border-slate-800">
            <span>{isZh ? '所占比例:' : 'Percentage:'}</span>
            <span className="font-extrabold text-emerald-400 text-sm">{data.percentage}%</span>
          </div>
          <div className="flex justify-between items-center text-slate-400 text-[11px] pb-1">
            <span>{isZh ? '学生人数:' : 'Sample Count:'}</span>
            <span className="font-bold text-slate-200">{data.count} / 96 {isZh ? '人' : 'students'}</span>
          </div>
          {(data.secondaryInfoZh || data.secondaryInfoEn) && (
            <div className="mt-1 pt-1.5 border-t border-slate-800/80 text-[11px] text-amber-300/90 font-medium">
              💡 {isZh ? data.secondaryInfoZh : data.secondaryInfoEn}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div id="survey-mission-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 1. Header & Executive Narrative */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#042f2c] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isZh ? '基于96份校园真实问卷调研 · 项目创立初衷' : 'Empirical Research & Founding Intention'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-white leading-tight">
            {isZh ? SURVEY_METADATA.titleZh : SURVEY_METADATA.titleEn}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {isZh ? (
              <>
                本项调查围绕<strong>学生校服丢失频率、找回难度、丢后应对方式、旧校服接受意愿、清洗费支付意愿、毕业捐献意愿及校服调剂需求</strong>等七大维度展开。
                调研数据显示：<span className="text-emerald-400 font-bold">超83%的学生强烈希望建立校服交换渠道，超81%愿在毕业后捐献闲置校服</span>。然而目前<span className="text-rose-300 font-bold">超58%的学生面临校服找不回的困境，60%不得不高价重新采购</span>。
                这正是 <strong>Uniform Recycle（校服循环回收）</strong> 诞生的根本初衷与使命。
              </>
            ) : (
              <>
                Based on a comprehensive survey of 96 student respondents exploring uniform loss frequency, recovery bottlenecks, replacement costs, pre-loved acceptance, and swap demand.
                The data shows an overwhelming <span className="text-emerald-400 font-bold">83.3% demand for exchange platforms</span> and <span className="text-emerald-400 font-bold">81.3% donation willingness</span>, while <span className="text-rose-300 font-bold">58.3% fail to recover lost items</span> and <span className="text-amber-300 font-bold">60.4% are forced into expensive repurchasing</span>.
                This empirical evidence forms the core purpose and mission of <strong>Uniform Recycle</strong>.
              </>
            )}
          </p>

          {/* Survey Metadata Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>{isZh ? '有效样本: 96份学生答卷' : 'Sample: 96 Valid Responses'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>{isZh ? '调研时间: 2026年8月' : 'Survey Date: August 2026'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{isZh ? '调研平台: 问卷星线上实名/匿名抽样' : 'Platform: Student Survey Platform'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Statistical Insights / KPI Cards */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <span>{isZh ? '核心发现与关键指标概览' : 'Executive Survey Summary & Core KPIs'}</span>
            </h2>
            <p className="text-sm text-slate-600">
              {isZh ? '七大核心维度的量化结果与痛点总结' : 'Quantitative results across 7 major survey dimensions'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CORE_KPIS.map((kpi) => (
            <div 
              key={kpi.id} 
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    kpi.color === 'emerald' ? 'text-emerald-600' :
                    kpi.color === 'rose' ? 'text-rose-600' :
                    kpi.color === 'amber' ? 'text-amber-600' :
                    kpi.color === 'teal' ? 'text-teal-600' :
                    kpi.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                  }`}>
                    {kpi.value}
                  </span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  {isZh ? kpi.labelZh : kpi.labelEn}
                </div>
              </div>
              <div className="text-[11px] text-slate-500 mt-2.5 pt-2 border-t border-slate-100 leading-tight">
                {isZh ? kpi.subtextZh : kpi.subtextEn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 5 Strategic Pillars / Why Uniform Recycle Exists (Intention Section) */}
      <section className="bg-gradient-to-b from-slate-50 to-emerald-50/40 rounded-3xl p-6 sm:p-10 border border-emerald-100/80 shadow-xs space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{isZh ? '项目初衷与五大行动倡议' : 'Our Intention & 5 Strategic Pillars'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {isZh ? '数据驱动的校服循环解决方案' : 'Data-Driven Solutions for School Uniform Recycling'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isZh ? (
              '根据问卷中暴露的“丢得多、找不回、重买贵、放弃不管”等痛点，Uniform Recycle 项目团队确立了五大核心使命，旨在打破心理障碍与卫生疑虑，打造高效闭环。'
            ) : (
              'Addressing the vicious cycle of "frequent loss, failed retrieval, expensive repurchases, and passive abandonment," our 5 pillars transform campus textile stewardship into a seamless, sanitized circular system.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MISSION_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
                    PILLAR {pillar.number}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.bgColor} text-emerald-700`}>
                    {pillar.id === 'pillar_1' && <Recycle className="w-5 h-5" />}
                    {pillar.id === 'pillar_2' && <Sparkles className="w-5 h-5" />}
                    {pillar.id === 'pillar_3' && <ShieldCheck className="w-5 h-5" />}
                    {pillar.id === 'pillar_4' && <HeartHandshake className="w-5 h-5" />}
                    {pillar.id === 'pillar_5' && <Award className="w-5 h-5" />}
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {isZh ? pillar.titleZh : pillar.titleEn}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 mt-1">
                    {isZh ? pillar.subtitleZh : pillar.subtitleEn}
                  </div>
                </div>

                {/* Data Proof Badge */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-slate-500">
                    <Info className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isZh ? '问卷数据实证:' : 'Survey Evidence:'}</span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-slate-600">
                    {isZh ? pillar.dataEvidenceZh : pillar.dataEvidenceEn}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isZh ? pillar.descriptionZh : pillar.descriptionEn}
                </p>

                {/* Concrete action list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {isZh ? '落地执行措施:' : 'Concrete Actions:'}
                  </div>
                  {(isZh ? pillar.actionsZh : pillar.actionsEn).map((action, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Quick CTA Box */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl p-6 text-white flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-white">
                {isZh ? '加入校服循环行动' : 'Experience the Circular Platform'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {isZh ? (
                  '每一件流转的校服，都在减少垃圾填埋，为家庭节省开支。立即浏览二手校服或登记捐赠！'
                ) : (
                  'Every recirculated blazer and PE kit diverts waste from landfills and saves families up to 80%. Browse our sanitized catalog or donate now.'
                )}
              </p>
            </div>

            <div className="space-y-2 pt-4">
              {scrollToStore && (
                <button
                  onClick={scrollToStore}
                  className="w-full flex items-center justify-center gap-2 bg-white text-emerald-900 hover:bg-emerald-50 px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all cursor-pointer"
                >
                  <span>{isZh ? '浏览校服商城' : 'Browse Recycled Store'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              {openDonationModal && (
                <button
                  onClick={openDonationModal}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-950/40 hover:bg-emerald-950/60 text-white px-4 py-2.5 rounded-xl font-bold text-xs border border-emerald-400/40 transition-all cursor-pointer"
                >
                  <Recycle className="w-4 h-4 text-emerald-300" />
                  <span>{isZh ? '登记捐赠/交换' : 'Donate or Swap Uniforms'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Survey Data Exhibition (With Global & Per-Question Graph / Data Switcher Button) */}
      <section className="space-y-8 pt-4">
        
        {/* Exhibition Controls Header with Prominent SWITCH BUTTON */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <FileText className="w-3.5 h-3.5" />
              <span>{isZh ? '原始问卷数据看板' : 'Survey Data Exhibition'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isZh ? '问卷详细数据与图表展示' : 'Interactive Research Data & Visual Graphs'}
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              {isZh ? (
                '使用右侧切换按钮，可在【数据表格】与【可视化图表】之间随时切换查看全部问卷分布。'
              ) : (
                'Use the toggle buttons beside to seamlessly switch between structured data tables and visual charts.'
              )}
            </p>
          </div>

          {/* Master Switch Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            
            {/* Global Graph vs Data Switcher Button */}
            <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center border border-slate-200 shadow-2xs">
              <button
                id="btn-switch-to-graph"
                onClick={() => handleGlobalModeChange('graph')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  globalViewMode === 'graph'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
                title="Switch all questions to Graph view"
              >
                <BarChart3 className="w-4 h-4" />
                <span>{isZh ? '📊 图表展示 (Graph)' : '📊 Graph View'}</span>
              </button>

              <button
                id="btn-switch-to-data"
                onClick={() => handleGlobalModeChange('data')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  globalViewMode === 'data'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
                title="Switch all questions to Data Table view"
              >
                <TableIcon className="w-4 h-4" />
                <span>{isZh ? '📋 数据表格 (Data)' : '📋 Data Table'}</span>
              </button>
            </div>

            {/* Chart Style Switcher (Donut vs Bar) when in Graph mode */}
            {globalViewMode === 'graph' && (
              <div className="hidden sm:flex bg-slate-100 p-1 rounded-xl items-center border border-slate-200 text-xs">
                <button
                  onClick={() => setChartType('donut')}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                    chartType === 'donut' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {isZh ? '饼图' : 'Donut'}
                </button>
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                    chartType === 'bar' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {isZh ? '柱状图' : 'Bar'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Tabs by Question (Q1-Q7 or All) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setActiveFilterId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
              activeFilterId === 'all'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {isZh ? `全部问卷题目 (${SURVEY_TOPICS.length})` : `All Survey Topics (${SURVEY_TOPICS.length})`}
          </button>
          {SURVEY_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveFilterId(topic.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeFilterId === topic.id
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="text-emerald-500 font-extrabold mr-1">{topic.questionNumber}:</span>
              <span>{isZh ? topic.shortLabelZh : topic.shortLabelEn}</span>
            </button>
          ))}
        </div>

        {/* Survey Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedTopics.map((topic) => {
            const currentMode = getTopicMode(topic.id);

            return (
              <div
                key={topic.id}
                id={`survey-card-${topic.id}`}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                {/* Card Top Header */}
                <div className="p-6 pb-4 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                        {topic.questionNumber}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                          {isZh ? topic.titleZh : topic.titleEn}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {isZh ? topic.subtitleZh : topic.subtitleEn}
                        </p>
                      </div>
                    </div>

                    {/* Beside Button: Switch Between Data & Graph for this card */}
                    <div className="flex items-center bg-slate-200/80 p-1 rounded-xl shrink-0 shadow-2xs">
                      <button
                        onClick={() => setTopicMode(topic.id, 'graph')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                          currentMode === 'graph'
                            ? 'bg-emerald-600 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                        title="View visual chart"
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span className="hidden xs:inline">{isZh ? '图表' : 'Graph'}</span>
                      </button>

                      <button
                        onClick={() => setTopicMode(topic.id, 'data')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                          currentMode === 'data'
                            ? 'bg-slate-900 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                        title="View raw data table"
                      >
                        <TableIcon className="w-3.5 h-3.5" />
                        <span className="hidden xs:inline">{isZh ? '数据' : 'Data'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Body: Dynamic Toggle between Graph and Data Table */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* GRAPH VIEW */}
                  {currentMode === 'graph' ? (
                    <div className="space-y-4">
                      <div className="h-64 sm:h-72 w-full flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          {chartType === 'donut' ? (
                            <PieChart>
                              <Pie
                                data={topic.options}
                                dataKey="percentage"
                                nameKey={isZh ? "labelZh" : "labelEn"}
                                cx="50%"
                                cy="50%"
                                innerRadius={55}
                                outerRadius={90}
                                paddingAngle={3}
                              >
                                {topic.options.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                          ) : (
                            <BarChart data={topic.options} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                              <XAxis type="number" domain={[0, 100]} unit="%" tick={{ fontSize: 11, fill: '#64748B' }} />
                              <YAxis 
                                type="category" 
                                dataKey={isZh ? "labelZh" : "labelEn"} 
                                width={100}
                                tick={{ fontSize: 11, fill: '#1E293B' }} 
                              />
                              <Tooltip content={<CustomTooltip />} />
                              <Bar dataKey="percentage" radius={[0, 6, 6, 0]}>
                                {topic.options.map((entry, index) => (
                                  <Cell key={`bar-${index}`} fill={entry.color} />
                                ))}
                              </Bar>
                            </BarChart>
                          )}
                        </ResponsiveContainer>
                      </div>

                      {/* Interactive Legend with Clickable Tooltip Highlights */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                        {topic.options.map((opt, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50/80 border border-slate-100">
                            <div className="flex items-center gap-2 min-w-0 pr-1">
                              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: opt.color }} />
                              <span className="text-slate-700 font-semibold truncate text-[11px] sm:text-xs">
                                {isZh ? opt.labelZh : opt.labelEn}
                              </span>
                            </div>
                            <span className="font-extrabold text-slate-900 text-xs shrink-0">
                              {opt.percentage}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* DATA TABLE VIEW */
                    <div className="space-y-4">
                      <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                            <tr>
                              <th className="py-2.5 px-3">{isZh ? '问卷选项 (Options)' : 'Survey Option'}</th>
                              <th className="py-2.5 px-3 text-right">{isZh ? '占比 (%)' : 'Share (%)'}</th>
                              <th className="py-2.5 px-3 text-right">{isZh ? '人次 (Count)' : 'Sample Count'}</th>
                              <th className="py-2.5 px-3 hidden sm:table-cell">{isZh ? '受众群体分析' : 'Segment Insight'}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {topic.options.map((opt, idx) => (
                              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="py-2.5 px-3 font-semibold text-slate-900 flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: opt.color }} />
                                  <span>{isZh ? opt.labelZh : opt.labelEn}</span>
                                </td>
                                <td className="py-2.5 px-3 text-right font-black text-emerald-700">
                                  {opt.percentage}%
                                </td>
                                <td className="py-2.5 px-3 text-right font-bold text-slate-600">
                                  {opt.count} <span className="text-[10px] text-slate-400">/ 96</span>
                                </td>
                                <td className="py-2.5 px-3 text-slate-500 text-[11px] hidden sm:table-cell">
                                  {isZh ? opt.secondaryInfoZh : opt.secondaryInfoEn}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot className="bg-slate-50/80 font-bold border-t border-slate-200 text-slate-800">
                            <tr>
                              <td className="py-2 px-3">{isZh ? '有效样本总计' : 'Total Valid Sample'}</td>
                              <td className="py-2 px-3 text-right text-emerald-700">100.0%</td>
                              <td className="py-2 px-3 text-right">96 {isZh ? '人' : 'students'}</td>
                              <td className="py-2 px-3 hidden sm:table-cell text-slate-500 text-[10px]">
                                {isZh ? '问卷星平台实测统计' : 'Platform Verified Sample'}
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Survey Analysis & Insight Box */}
                  <div className="space-y-3 pt-2">
                    <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/80 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800 uppercase tracking-wide">
                        <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{isZh ? '调研报告深度结论:' : 'Key Survey Takeaway:'}</span>
                      </div>
                      <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                        {isZh ? topic.descriptionZh : topic.descriptionEn}
                      </p>
                    </div>

                    {/* Cross correlation quote */}
                    {topic.crossAnalysisZh && (
                      <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-start gap-1.5">
                        <span className="font-bold text-slate-700 shrink-0">{isZh ? '📌 交叉洞察:' : '📌 Cross-Insight:'}</span>
                        <span>{isZh ? topic.crossAnalysisZh : topic.crossAnalysisEn}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{isZh ? `核心指标: ${topic.coreStat}` : `Core Metric: ${topic.coreStat}`}</span>
                  <span className="text-emerald-700 font-bold">{isZh ? topic.coreStatLabelZh : topic.coreStatLabelEn}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Cross-Variable Deep Analysis Cards (From PDF Pages 4-9) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>{isZh ? '交叉分析与因果推导' : 'Cross-Variable Correlation'}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {isZh ? CROSS_ANALYSIS_DATA.titleZh : CROSS_ANALYSIS_DATA.titleEn}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {isZh ? '深入挖掘学生行为与心理背后的因果关系' : 'Unpacking behavioral dependencies and psychological attitudes'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CROSS_ANALYSIS_DATA.items.map((item, idx) => (
            <div key={idx} className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-2.5">
              <div className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span>{isZh ? item.titleZh : item.titleEn}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isZh ? item.findingZh : item.findingEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bottom Navigation CTA Section */}
      <section className="bg-[#0F172A] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 max-w-2xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
            {isZh ? '把闲置校服变成校园新风尚' : 'Turn Outgrown Uniforms into a Green Movement'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {isZh ? (
              '无论是捐献闲置校服、调剂合身尺码，还是以平价购买已严格消毒的备用校服，您的每次参与都在为减少碳排放与水资源消耗贡献力量。'
            ) : (
              'Whether donating outgrown garments, swapping sizes, or purchasing affordable sanitized spares, your participation saves money and preserves natural resources.'
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          {scrollToStore && (
            <button
              onClick={scrollToStore}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-3 rounded-xl font-black text-xs shadow-md transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isZh ? '前往校服商城选购' : 'Explore Recycled Store'}</span>
            </button>
          )}

          {openDonationModal && (
            <button
              onClick={openDonationModal}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-bold text-xs border border-slate-700 transition-all cursor-pointer"
            >
              <Recycle className="w-4 h-4 text-emerald-400" />
              <span>{isZh ? '预约捐赠 / 交换' : 'Donate or Swap'}</span>
            </button>
          )}

          {openCalculator && (
            <button
              onClick={openCalculator}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-bold text-xs border border-slate-700 transition-all cursor-pointer"
            >
              <TrendingUp className="w-4 h-4 text-teal-400" />
              <span>{isZh ? '测算环保效益' : 'Eco Calculator'}</span>
            </button>
          )}
        </div>
      </section>

    </div>
  );
};
