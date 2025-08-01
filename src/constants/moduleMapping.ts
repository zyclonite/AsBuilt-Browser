export interface ModuleInfo {
  longName: string;
  shortName: string;
  prefix: string;
}

export const moduleMapping: Record<string, ModuleInfo> = {
  '783': { longName: '(Audio) Digital Signal Processing Module', shortName: 'DSP', prefix: '783' },
  '761': { longName: '4X4 Control Module', shortName: '4X4M', prefix: '761' },
  '7D0': { longName: 'Accessory Protocol Interface Module', shortName: 'APIM', prefix: '7D0' },
  '7E7': {
    longName: 'Air Conditioning Control Module / Battery Energy Control Module',
    shortName: 'ACCM/BECM',
    prefix: '7E7',
  },
  '020': {
    longName: 'Air Suspension / Rear Air Suspension Module',
    shortName: '4WAS/RASM',
    prefix: '020',
  },
  '7E5': { longName: 'Alternative Fuel Control Module', shortName: 'AFCM', prefix: '7E5' },
  '760': { longName: 'Anti-Lock Brake / Traction Control Module', shortName: 'ABS', prefix: '760' },
  '727': { longName: 'Audio Control Module', shortName: 'ACM', prefix: '727' },
  '774': { longName: 'Audio Rear Control Unit', shortName: 'RCU', prefix: '774' },
  '7E3': { longName: 'Auxiliary Heater Control Module', shortName: 'AHCM', prefix: '7E3' },
  '090': { longName: 'Cellular Phone Module', shortName: 'CPM', prefix: '090' },
  '052': {
    longName: 'Central Timer Module / Front Electronic Module',
    shortName: 'CTM/FEM',
    prefix: '052',
  },
  '7E2': { longName: 'Circuit Deactivation Ignition Module', shortName: 'CDIM', prefix: '7E2' },
  '764': { longName: 'Cruise Control', shortName: 'CCM', prefix: '764' },
  '746': { longName: 'DC to DC Converter Control Module', shortName: 'DCDC', prefix: '746' },
  '7D5': { longName: 'Digital Audio Control Module C', shortName: 'DACMC', prefix: '7D5' },
  '776': { longName: 'Driver/Dual Climate-Control Seat Module', shortName: 'DCSM', prefix: '776' },
  '740': { longName: 'Drivers Door Module', shortName: 'DDM', prefix: '740' },
  '744': { longName: "Driver's Seat Module", shortName: 'DSM', prefix: '744' },
  '02A': { longName: 'Electric Parking Brake', shortName: 'EPB', prefix: '02A' },
  '098': { longName: 'Electronic Automatic Temperature Control', shortName: 'EATC', prefix: '098' },
  '058': { longName: 'Electronic Crash Sensor', shortName: 'ECS', prefix: '058' },
  '730': {
    longName: 'Electronic-Controlled Power Steering / Passenger Climate-Control Seat Module',
    shortName: 'EPS/PCSM',
    prefix: '730',
  },
  '059': { longName: 'Fire Suppression System Module', shortName: 'FSSM', prefix: '059' },
  '7A5': { longName: 'Front Control/Display Interface Module', shortName: 'FCDIM', prefix: '7A5' },
  '7A7': { longName: 'Front Controls Interface Module', shortName: 'FCIM', prefix: '7A7' },
  '7A6': { longName: 'Front Display Interface Module', shortName: 'FDIM', prefix: '7A6' },
  '00F': { longName: 'Fuel Fired Coolant Heating Module', shortName: 'FFH', prefix: '00F' },
  '016': { longName: 'Fuel Indication Module', shortName: 'FIM', prefix: '016' },
  '7E6': { longName: 'Fuel Injection Control Module', shortName: 'FICM', prefix: '7E6' },
  '716': { longName: 'Gateway Module A', shortName: 'GWM', prefix: '716' },
  '701': { longName: 'Global Positioning System Module', shortName: 'GPSM', prefix: '701' },
  '7B2': { longName: 'Head Up Display', shortName: 'HUD', prefix: '7B2' },
  '734': { longName: 'Headlamp Control Module', shortName: 'HCM', prefix: '734' },
  '7C3': { longName: 'Headlamp Control Module 2(B)', shortName: 'HCM2', prefix: '7C3' },
  '071': { longName: 'Headlamp Leveling Module', shortName: 'HD_LVL', prefix: '071' },
  '714': { longName: 'Heated Steering Wheel Module', shortName: 'HSWM', prefix: '714' },
  '733': { longName: 'Heating Ventilation Air Conditioning', shortName: 'HVAC', prefix: '733' },
  '060': {
    longName: 'Hybrid Electronic Cluster / Virtual Image Cluster',
    shortName: 'HEC/VIC',
    prefix: '060',
  },
  '706': { longName: 'Image Processing Module A', shortName: 'IPMA', prefix: '706' },
  '7B1': { longName: 'Image Processing Module B', shortName: 'IPMB', prefix: '7B1' },
  '720': { longName: 'Instrument Panel Control Module', shortName: 'IPC', prefix: '720' },
  '7B5': { longName: 'Interior Lighting Control Module', shortName: 'ILCM', prefix: '7B5' },
  '0B0': { longName: 'Left Power Sliding Door Module', shortName: 'LPSDM', prefix: '0B0' },
  '775': { longName: 'Liftgate / Trunk Module', shortName: 'LTM', prefix: '775' },
  '070': {
    longName: 'Lighting Control Module / Steering Column/Instrument Panel/Lighting',
    shortName: 'LCM/SCIL',
    prefix: '070',
  },
  '061': { longName: 'Message Center', shortName: 'MC', prefix: '061' },
  '068': { longName: 'Navigation Controller', shortName: 'NAV', prefix: '068' },
  '013': { longName: 'Next Generation Speed Control Module', shortName: 'NGSC', prefix: '013' },
  '765': { longName: 'Occupant Classification System Module', shortName: 'OCS', prefix: '765' },
  '736': { longName: 'Parking Aid Module', shortName: 'PAM', prefix: '736' },
  '777': {
    longName: 'Passenger Climate-Control Seat Module 2 (rear)',
    shortName: 'PCSM2',
    prefix: '777',
  },
  '0A6': { longName: 'Passenger Front Seat Module', shortName: 'PSM', prefix: '0A6' },
  '741': { longName: 'Passengers Door Control Unit', shortName: 'PDM', prefix: '741' },
  '0C0': { longName: 'Passive Anti-Theft System', shortName: 'PATS', prefix: '0C0' },
  '766': { longName: 'Power Running Board', shortName: 'PRB', prefix: '766' },
  '242': { longName: 'Power Steering Control Module', shortName: 'PSCM', prefix: '242' },
  '7E0': { longName: 'Powertrain Control Module', shortName: 'PCM', prefix: '7E0' },
  '099': { longName: 'Rear Air Temperature Control', shortName: 'RATC', prefix: '099' },
  '050': { longName: 'Rear Electronic Module', shortName: 'REM', prefix: '050' },
  '785': {
    longName: 'Rear Heating Ventilation Air Conditioning',
    shortName: 'RHVAC',
    prefix: '785',
  },
  '771': { longName: 'Rear Seat Entertainment Module', shortName: 'RETM', prefix: '771' },
  '048': { longName: 'Remote Anti-Theft / Personality Module', shortName: 'RAP', prefix: '048' },
  '731': { longName: 'Remote Function Actuator', shortName: 'RFA', prefix: '731' },
  '737': { longName: 'Restraint Control Module', shortName: 'RCM', prefix: '737' },
  '782': { longName: 'Satellite Digital Audio Receiver System', shortName: 'SDARS', prefix: '782' },
  '712': { longName: 'Seat Control Module G', shortName: 'SCMG', prefix: '712' },
  '713': { longName: 'Seat Control Module H', shortName: 'SCMH', prefix: '713' },
  '0C1': { longName: 'Security module', shortName: 'CSM', prefix: '0C1' },
  '7C4': {
    longName: 'Side Obstacle Detection Control Module - Left',
    shortName: 'SODL',
    prefix: '7C4',
  },
  '7C6': {
    longName: 'Side Obstacle Detection Control Module - Right',
    shortName: 'SODR',
    prefix: '7C6',
  },
  '797': { longName: 'Steering Angle Sensor Module', shortName: 'SASM', prefix: '797' },
  '724': { longName: 'Steering Column Control Module', shortName: 'SCCM', prefix: '724' },
  '0C3': { longName: 'Steering Column Locking Module', shortName: 'SCLM', prefix: '0C3' },
  '7C5': { longName: 'Steering Effort Control Module', shortName: 'SECM', prefix: '7C5' },
  '0CE': { longName: 'Tracking and Blocking Module', shortName: 'TBM', prefix: '0CE' },
  '757': { longName: 'Trailer Brake Control Module', shortName: 'TBC', prefix: '757' },
  '791': { longName: 'Trailer Module', shortName: 'TRM', prefix: '791' },
  '7E1': { longName: 'Transmission Control Module', shortName: 'TCM', prefix: '7E1' },
  '030': { longName: 'Variable Assist Power Steering', shortName: 'VAPS', prefix: '030' },
  '721': { longName: 'Vehicle Dynamics Module', shortName: 'VDM', prefix: '721' },
  '091': { longName: 'Vehicle Emergency Messaging System', shortName: 'VEMS', prefix: '091' },
  '755': { longName: 'Vehicle Security Module', shortName: 'VSM', prefix: '755' },
  '754': {
    longName: 'Telematics Control Unit',
    shortName: 'TCU',
    prefix: '754',
  },
  '726': {
    longName: 'Body Control Module',
    shortName: 'BdyCM',
    prefix: '726',
  },
  '703': {
    longName: 'Body Control Module',
    shortName: 'BCM',
    prefix: '703',
  },
  '6F0': {
    longName: 'Body Control Module C / Battery Junction Box',
    shortName: 'BCMC/BJB',
    prefix: '6F0',
  },
  '751': {
    longName: 'Battery Energy Control Module',
    shortName: 'BECM',
    prefix: '751',
  },
  '7C7': {
    longName: 'Air Conditioning Control Module',
    shortName: 'ACCM',
    prefix: '7C7',
  },
};

export const fCodeMapping: Record<string, string> = {
  F10A: 'ECU Cal-Config Part Number',
  F110: 'On-line Diagnostic Database Reference Number',
  F111: 'ECU Core Assembly Number',
  F113: 'ECU Delivery Assembly Number',
  F124: 'ECU Calibration Data #1 Number',
  F162: 'Software Download Specification Version',
  F163: 'Diagnostic Specification Version',
  F188: 'Vehicle Manufacturer ECU Software Number',
  F18C: 'ECU Serial Number',
  F0E8: 'Private Sub Node #1 Software Number',
  F0E9: 'Private Sub Node #2 Software Number',
  F108: 'ECU Network Signal Calibration Number',
  F129: 'Private Sub Node #1 Core Assembly Number',
  F12A: 'Private Sub Node #2 Part Number',
  F141: 'Private Sub Node #1 Serial Number',
  F142: 'Private Sub Node #2 Serial Number',
  F16B: 'ECU Cal-Config #2 Part Number',
  F16C: 'ECU Cal-Config #3 Part Number',
  F16D: 'ECU Cal-Config #4 Part Number',
  F16E: 'ECU Cal-Config #5 Part Number',
  F17D: 'ECU Cal-Config #6 Part Number',
  F1D0: 'ECU MAC Address 1',
  F1D1: 'ECU MAC Address 2',
  E21X: 'Part Number Identification',
  E610: 'ECU Hardware Part Number',
  E611: 'ECU Strategy Software Part Number',
  E6F2: 'Configuration and Programming Version',
  E6F3: 'CAN Diagnostic Specification Version',
  FFEE: 'Reserved For Part II',
  F190: 'Original Config (VIN)',
};

export const nodeIdToModule: Record<string, string> = {
  '783': 'DSP',
  '761': '4X4M',
  '7D0': 'APIM',
  '7E7': 'ACCM/BECM',
  '020': '4WAS/RASM',
  '7E5': 'AFCM',
  '760': 'ABS',
  '727': 'ACM',
  '774': 'RCU',
  '7E3': 'AHCM',
  '090': 'CPM',
  '052': 'CTM/FEM',
  '7E2': 'CDIM',
  '764': 'CCM',
  '746': 'DCDC',
  '7D5': 'DACMC',
  '776': 'DCSM',
  '740': 'DDM',
  '744': 'DSM',
  '02A': 'EPB',
  '098': 'EATC',
  '058': 'ECS',
  '730': 'EPS/PCSM',
  '059': 'FSSM',
  '7A5': 'FCDIM',
  '7A7': 'FCIM',
  '7A6': 'FDIM',
  '00F': 'FFH',
  '016': 'FIM',
  '7E6': 'FICM',
  '716': 'GWM',
  '701': 'GPSM',
  '7B2': 'HUD',
  '734': 'HCM',
  '7C3': 'HCM2',
  '071': 'HD_LVL',
  '714': 'HSWM',
  '733': 'HVAC',
  '060': 'HEC/VIC',
  '706': 'IPMA',
  '7B1': 'IPMB',
  '720': 'IPC',
  '7B5': 'ILCM',
  '0B0': 'LPSDM',
  '775': 'LTM',
  '070': 'LCM/SCIL',
  '061': 'MC',
  '068': 'NAV',
  '013': 'NGSC',
  '765': 'OCS',
  '736': 'PAM',
  '777': 'PCSM2',
  '0A6': 'PSM',
  '741': 'PDM',
  '0C0': 'PATS',
  '766': 'PRB',
  '242': 'PSCM',
  '7E0': 'PCM',
  '099': 'RATC',
  '050': 'REM',
  '785': 'RHVAC',
  '771': 'RETM',
  '048': 'RAP',
  '731': 'RFA',
  '737': 'RCM',
  '782': 'SDARS',
  '712': 'SCMG',
  '713': 'SCMH',
  '0C1': 'CSM',
  '7C4': 'SODL',
  '7C6': 'SODR',
  '797': 'SASM',
  '724': 'SCCM',
  '0C3': 'SCLM',
  '7C5': 'SECM',
  '0CE': 'TBM',
  '757': 'TBC',
  '791': 'TRM',
  '7E1': 'TCM',
  '030': 'VAPS',
  '721': 'VDM',
  '091': 'VEMS',
  '755': 'VSM',
  '754': 'TCU',
  '726': 'BdyCM',
  '751': 'BECM',
  '7C7': 'ACCM',
  '703': 'BCM',
  '6F0': 'BCMC/BJB',
};

export function getModuleInfo(label: string): ModuleInfo | undefined {
  // Extract the prefix from the label (e.g., "7D0-01-01" -> "7D0")
  const prefix = label.split('-')[0];
  return moduleMapping[prefix];
}

export function getFCodeDescription(code: string): string {
  return fCodeMapping[code] || code;
}

export function getNodeModuleName(prefix: string): string {
  return nodeIdToModule[prefix] || prefix;
}
