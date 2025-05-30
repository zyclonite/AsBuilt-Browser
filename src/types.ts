export interface Code {
  CODE: string[];
}

export interface Data {
  '@_LABEL': string;
  CODE: string[];
}

export interface Module {
  DATA: Data[];
}

export interface Node {
  '@_ID': string;
  '@_NAME': string;
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
    VEHICLE: Vehicle;
  };
}
