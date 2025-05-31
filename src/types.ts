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
  [key: string]: string | undefined;
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
      VEHICLE_TYPE: string;
      VEHICLE_YEAR: string;
      VEHICLE_MODEL: string;
      VEHICLE_MAKE: string;
      VEHICLE_ENGINE: string;
      VEHICLE_TRANS: string;
      VEHICLE_DRIVE: string;
      VEHICLE_BODY: string;
      VEHICLE_OPTIONS: string;
      VEHICLE_OPTIONS_LIST: {
        OPTION: {
          '@_CODE': string;
          '@_NAME': string;
        }[];
      };
      VEHICLE_MODULES: {
        MODULE: Module[];
      };
      ERROR?: {
        '@_CODE': string;
        '@_DESC': string;
      };
      [key: string]: any;
    };
  };
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
