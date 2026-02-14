export const MOCK_TEST_TYPES = [
  // Chemical & Nutrients (Basic)
  { id: 'TT-101', name: 'pH Test', unit: 'pH', description: 'Soil acidity or alkalinity level', status: 'Active' },
  { id: 'TT-102', name: 'Nitrogen (N)', unit: 'kg/ha', description: 'Available Nitrogen content', status: 'Active' },
  { id: 'TT-103', name: 'Phosphorus (P)', unit: 'kg/ha', description: 'Available Phosphorus level', status: 'Active' },
  { id: 'TT-104', name: 'Potassium (K)', unit: 'kg/ha', description: 'Available Potassium level', status: 'Active' },
  { id: 'TT-105', name: 'Organic Carbon', unit: '%', description: 'Soil organic matter percentage', status: 'Active' },
  { id: 'TT-106', name: 'Electrical Conductivity', unit: 'dS/m', description: 'Soluble salt concentration', status: 'Active' },
  
  // Secondary & Micronutrients
  { id: 'TT-107', name: 'Sulphur (S)', unit: 'ppm', description: 'Available Sulphur content', status: 'Active' },
  { id: 'TT-108', name: 'Zinc (Zn)', unit: 'ppm', description: 'DTPA extractable Zinc', status: 'Active' },
  { id: 'TT-109', name: 'Iron (Fe)', unit: 'ppm', description: 'DTPA extractable Iron', status: 'Active' },
  { id: 'TT-110', name: 'Manganese (Mn)', unit: 'ppm', description: 'DTPA extractable Manganese', status: 'Active' },
  { id: 'TT-111', name: 'Copper (Cu)', unit: 'ppm', description: 'DTPA extractable Copper', status: 'Active' },
  { id: 'TT-112', name: 'Boron (B)', unit: 'ppm', description: 'Hot water soluble Boron', status: 'Active' },
  { id: 'TT-113', name: 'Calcium (Ca)', unit: 'meq/100g', description: 'Exchangeable Calcium', status: 'Active' },
  { id: 'TT-114', name: 'Magnesium (Mg)', unit: 'meq/100g', description: 'Exchangeable Magnesium', status: 'Active' },
  { id: 'TT-115', name: 'Molybdenum (Mo)', unit: 'ppm', description: 'Available Molybdenum', status: 'Inactive' },

  // FDD & Physical Properties (Geotechnical)
  { id: 'TT-116', name: 'Field Dry Density', unit: 'g/cc', description: 'FDD via Sand Replacement method', status: 'Active' },
  { id: 'TT-117', name: 'Bulk Density', unit: 'Mg/m³', description: 'Mass per unit volume of soil', status: 'Active' },
  { id: 'TT-118', name: 'Moisture Content', unit: '%', description: 'In-situ water content', status: 'Active' },
  { id: 'TT-119', name: 'Specific Gravity', unit: 'G', description: 'Ratio of soil density to water density', status: 'Active' },
  { id: 'TT-120', name: 'Optimum Moisture Content', unit: '%', description: 'OMC from Proctor compaction test', status: 'Active' },
  { id: 'TT-121', name: 'Max Dry Density', unit: 'g/cc', description: 'Peak density from compaction curve', status: 'Active' },
  { id: 'TT-122', name: 'Silt Content', unit: '%', description: 'Percentage of silt particles', status: 'Active' },
  { id: 'TT-123', name: 'Clay Content', unit: '%', description: 'Percentage of clay particles', status: 'Active' },
  { id: 'TT-124', name: 'Sand Content', unit: '%', description: 'Percentage of sand particles', status: 'Active' },
  { id: 'TT-125', name: 'Porosity', unit: '%', description: 'Volume of voids in soil', status: 'Active' },
  { id: 'TT-126', name: 'Void Ratio', unit: 'e', description: 'Ratio of void volume to solid volume', status: 'Active' },

  // Hydraulic & Environmental
  { id: 'TT-127', name: 'Infiltration Rate', unit: 'mm/hr', description: 'Speed at which water enters soil', status: 'Active' },
  { id: 'TT-128', name: 'Hydraulic Conductivity', unit: 'cm/sec', description: 'Soil water permeability', status: 'Active' },
  { id: 'TT-129', name: 'Water Holding Capacity', unit: '%', description: 'Max water soil can retain', status: 'Active' },
  { id: 'TT-130', name: 'Cation Exchange Capacity', unit: 'cmol/kg', description: 'Soil nutrient holding capacity', status: 'Active' },
  { id: 'TT-131', name: 'Sodium Adsorption Ratio', unit: 'SAR', description: 'Sodium status relative to Ca and Mg', status: 'Active' },
  { id: 'TT-132', name: 'Exchangeable Sodium', unit: '%', description: 'ESP for sodicity assessment', status: 'Active' },
  { id: 'TT-133', name: 'Total Dissolved Solids', unit: 'mg/L', description: 'Salinity in soil extract', status: 'Active' },

  // Heavy Metals & Toxins
  { id: 'TT-134', name: 'Lead (Pb) Content', unit: 'mg/kg', description: 'Trace metal contamination test', status: 'Active' },
  { id: 'TT-135', name: 'Arsenic (As) Content', unit: 'mg/kg', description: 'Arsenic toxicity levels', status: 'Active' },
  { id: 'TT-136', name: 'Cadmium (Cd) Content', unit: 'mg/kg', description: 'Heavy metal screening', status: 'Active' },
  { id: 'TT-137', name: 'Chromium (Cr) Content', unit: 'mg/kg', description: 'Industrial pollutant check', status: 'Active' },

  // Advanced Pedological/Biological
  { id: 'TT-138', name: 'Microbial Biomass', unit: 'µg/g', description: 'Active microbial population', status: 'Active' },
  { id: 'TT-139', name: 'Soil Respiration Rate', unit: 'mg CO2/kg', description: 'Biological activity measure', status: 'Active' },
  { id: 'TT-140', name: 'Dehydrogenase Activity', unit: 'µg TPF/g', description: 'Soil enzyme activity level', status: 'Active' },
  { id: 'TT-141', name: 'Free Carbonates', unit: '%', description: 'Calcium carbonate equivalent', status: 'Active' },
  { id: 'TT-142', name: 'Aggregate Stability', unit: '%', description: 'Resistance to erosion', status: 'Active' },
  { id: 'TT-143', name: 'Soil Temperature', unit: '°C', description: 'In-situ thermal reading', status: 'Active' },

  // Engineering / Index Properties
  { id: 'TT-144', name: 'Liquid Limit', unit: '%', description: 'Consistency at liquid state transition', status: 'Active' },
  { id: 'TT-145', name: 'Plastic Limit', unit: '%', description: 'Consistency at plastic state transition', status: 'Active' },
  { id: 'TT-146', name: 'Plasticity Index', unit: 'PI', description: 'Range of plasticity (LL - PL)', status: 'Active' },
  { id: 'TT-147', name: 'California Bearing Ratio', unit: '%', description: 'CBR value for subgrade strength', status: 'Active' },
  { id: 'TT-148', name: 'Chloride Content', unit: 'ppm', description: 'Soluble chloride levels', status: 'Active' },
  { id: 'TT-149', name: 'Sulphate Content', unit: 'g/L', description: 'Water soluble sulphate', status: 'Active' },
  { id: 'TT-150', name: 'Base Saturation', unit: '%', description: 'Percentage of CEC occupied by bases', status: 'Active' }
];