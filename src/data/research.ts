import type { ResearchPaper } from '@/types/research';

// ============================================================
// RESEARCH DATA
// Add new research papers here — ResearchCard auto-renders
// ============================================================
export const researchPapers: ResearchPaper[] = [
  {
    id: 'sales-prediction-ml',
    title: 'Sales Prediction Using Machine Learning Techniques',
    abstract:
      'This study investigates the application of supervised machine learning algorithms to predict e-commerce sales trends using historical transaction data. We compare Linear Regression, Random Forest, and XGBoost models across multiple feature sets.',
    problemStatement:
      'Traditional sales forecasting methods fail to capture non-linear patterns in large e-commerce datasets, leading to inaccurate inventory and revenue projections.',
    objective:
      'To develop and compare ML-based sales prediction models that outperform baseline statistical methods in accuracy and generalizability.',
    methodology:
      'Collected and preprocessed 50,000+ transaction records. Applied feature engineering, trained Linear Regression, Random Forest, and XGBoost models. Evaluated using RMSE, MAE, and R² metrics with 5-fold cross-validation.',
    results:
      'XGBoost achieved the best performance with R² of 0.91, outperforming Linear Regression (0.74) and Random Forest (0.88) across all evaluation metrics.',
    limitations:
      'Dataset was limited to a single e-commerce domain. Real-world generalization requires broader multi-domain validation.',
    futureScope:
      'Incorporating LSTM networks for temporal sales patterns and integrating external signals (seasonality, events) for improved prediction.',
    authors: ['Sneharsha Thammisetti'], // TODO: Add co-authors if any
    keywords: ['Machine Learning', 'Sales Prediction', 'XGBoost', 'Random Forest', 'E-commerce', 'Forecasting'],
    year: 2025,
    status: 'in-progress',
    publicationUrl: undefined, // TODO: Add when published
  },
  // ↓ Template — copy and fill in to add new papers
  // {
  //   id: 'unique-id',
  //   title: 'Research Paper Title',
  //   abstract: 'Brief abstract...',
  //   problemStatement: 'Problem being solved...',
  //   objective: 'Research objective...',
  //   methodology: 'How was it done...',
  //   results: 'Key findings...',
  //   limitations: 'Study limitations...',
  //   futureScope: 'Future directions...',
  //   authors: ['Author 1', 'Author 2'],
  //   keywords: ['keyword1', 'keyword2'],
  //   year: 2026,
  //   status: 'published',
  //   publicationUrl: 'https://doi.org/...',
  // },
];
