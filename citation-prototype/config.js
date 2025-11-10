export const REPORTER_PATTERNS = {
  // Circuit Court Reporters
  'F\\.3d': 'Federal Reporter 3d Series',
  'F\\.2d': 'Federal Reporter 2d Series',
  'Fed\\. ?Appx?\\.': 'Federal Appendix',
  
  // Supreme Court Reporters
  'S\\. ?Ct\\.': 'Supreme Court Reporter',
  'U\\.S\\.': 'United States Reports',
  'L\\. ?Ed\\.': 'United States Supreme Court Reports, Lawyers\' Edition',
  'L\\. ?Ed\\. ?2d': 'United States Supreme Court Reports, Lawyers\' Edition, Second Series',
  
  // District Court Reporters
  'F\\. ?Supp\\.': 'Federal Supplement',
  'F\\. ?Supp\\. ?2d': 'Federal Supplement 2d Series',
  'F\\. ?Supp\\. ?3d': 'Federal Supplement 3d Series',
  
  // Bankruptcy Reporters
  'B\\.R\\.': 'Bankruptcy Reporter',
  
  // Regional Reporters
  'A\\.': 'Atlantic Reporter',
  'A\\.2d': 'Atlantic Reporter 2d Series',
  'A\\.3d': 'Atlantic Reporter 3d Series',
  'P\\.': 'Pacific Reporter',
  'P\\.2d': 'Pacific Reporter 2d Series',
  'P\\.3d': 'Pacific Reporter 3d Series',
  // ... add more as needed
};

export const REPORTER_NAMES = {
    'F.3d': 'Federal Reporter 3d Series',
    'F.2d': 'Federal Reporter 2d Series',
    'Fed. Appx.': 'Federal Appendix',

    'S. Ct.': 'Supreme Court Reporter',
    'U.S.': 'United States Reports',
    'L. Ed.': 'United States Supreme Court Reports, Lawyers\' Edition',
    'L. Ed. 2d': 'United States Supreme Court Reports, Lawyers\' Edition, Second Series',

    'F. Supp.': 'Federal Supplement',
    'F. Supp. 2d': 'Federal Supplement 2d Series',
    'F. Supp. 3d': 'Federal Supplement 3d Series',

    'B.R.': 'Bankruptcy Reporter',

    'A.': 'Atlantic Reporter',
    'A.2d': 'Atlantic Reporter 2d Series',
    'A.3d': 'Atlantic Reporter 3d Series',
    'P.': 'Pacific Reporter',
    'P.2d': 'Pacific Reporter 2d Series',
    'P.3d': 'Pacific Reporter 3d Series',
    // ... add more as needed
};

const reporterPattern = Object.keys(REPORTER_PATTERNS).join('|');

export const citationPattern = new RegExp(
  `(\\w+(?:-\\w+)*)?\\sv\\.\\s(\\w+(?:-\\w+)*),\\s(\\d+)\\s(${reporterPattern})\\s(\\d+)\\s\\((\\d{4})\\)`,
  'g'
);