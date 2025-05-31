export interface Code {
  CODE: string[];
}

export interface Data {
  '@_LABEL': string;
  CODE: string[];
}

export interface Module {
  '@_LABEL': string;
  '@_NODEID': string;
  '@_CODE1'?: string;
  '@_CODE2'?: string;
  '@_CODE3'?: string;
  '@_FCODE'?: string;
  DATA: Array<{
    '@_LABEL': string;
    CODE: string[];
  }>;
  [key: string]: any;
}

export interface VehicleData {
  DATA: Code;
}

export interface Vehicle {
  VIN: string;
  VEHICLE_DATA: VehicleData;
  PCM_MODULE: Module;
  BCE_MODULE: Module;
  NODEID: Node[];
  [key: string]: any;
}

export interface AsBuiltData {
  AS_BUILT_DATA: {
    VEHICLE: {
      VIN: string;
      NODEID: string;
      ERROR?: Array<{
        '@_CODE': string;
        '@_DESC': string;
      }>;
      [key: string]: any;
    };
  };
  VEHICLE: {
    [key: string]: any;
  };
  NODEID: string;
  errors?: Array<{
    '@_CODE': string;
    '@_DESC': string;
  }>;
}

export interface ComparisonResult {
  label: string;
  nodeId: string;
  codes1: string[];
  codes2: string[];
  ori2: any[];
  differences: number[][];
}

export interface NodeComparisonResult {
  label: string;
  nodeId: string;
  value1: string;
  value2: string;
  partNumber1: string;
  partNumber2: string;
  difference: string;
}
