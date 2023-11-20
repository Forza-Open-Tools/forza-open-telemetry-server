import { TelemetryObject } from '../Parser/types';

export interface SledTelemetry extends TelemetryObject {
  // epochMs is not part of the received data - it is added by the parser
  epochMs: number;

  isRaceOn: number;

  timestampMS: number;
  engineMaxRpm: number;
  engineIdleRpm: number;
  currentEngineRpm: number;

  accelerationX: number;
  accelerationY: number;
  accelerationZ: number;

  velocityX: number;
  velocityY: number;
  velocityZ: number;

  angularVelocityX: number;
  angularVelocityY: number;
  angularVelocityZ: number;

  yaw: number;
  pitch: number;
  roll: number;

  // Normalized Suspension travel: 0.0=max stretch, 1.0=max compression
  normalizedSuspensionTravelFrontLeft: number;
  normalizedSuspensionTravelFrontRight: number;
  normalizedSuspensionTravelRearLeft: number;
  normalizedSuspensionTravelRearRight: number;

  // Tire normalized slip ratio, = 0 means 100% grip and |ratio| > 1.0 means loss of grip.
  tireSlipRatioFrontLeft: number;
  tireSlipRatioFrontRight: number;
  tireSlipRatioRearLeft: number;
  tireSlipRatioRearRight: number;

  // Wheel rotation speed radians/sec.
  wheelRotationSpeedFrontLeft: number;
  wheelRotationSpeedFrontRight: number;
  wheelRotationSpeedRearLeft: number;
  wheelRotationSpeedRearRight: number;

  // = 1 when wheel is on rumble strip, = 0 when off.
  wheelOnRumbleStripFrontLeft: number;
  wheelOnRumbleStripFrontRight: number;
  wheelOnRumbleStripRearLeft: number;
  wheelOnRumbleStripRearRight: number;

  // = from 0 to 1, where 1 is the deepest puddle
  wheelInPuddleDepthFrontLeft: number;
  wheelInPuddleDepthFrontRight: number;
  wheelInPuddleDepthRearLeft: number;
  wheelInPuddleDepthRearRight: number;

  // Non-dimensional surface rumble values passed to controller force feedback
  surfaceRumbleFrontLeft: number;
  surfaceRumbleFrontRight: number;
  surfaceRumbleRearLeft: number;
  surfaceRumbleRearRight: number;

  // Tire normalized slip angle, = 0 means 100% grip and |angle| > 1.0 means loss of grip.
  tireSlipAngleFrontLeft: number;
  tireSlipAngleFrontRight: number;
  tireSlipAngleRearLeft: number;
  tireSlipAngleRearRight: number;

  // Tire normalized combined slip, = 0 means 100% grip and |slip| > 1.0 means loss of grip.
  tireCombinedSlipFrontLeft: number;
  tireCombinedSlipFrontRight: number;
  tireCombinedSlipRearLeft: number;
  tireCombinedSlipRearRight: number;

  // Actual suspension travel in meters
  suspensionTravelMetersFrontLeft: number;
  suspensionTravelMetersFrontRight: number;
  suspensionTravelMetersRearLeft: number;
  suspensionTravelMetersRearRight: number;

  carOrdinal: number; // Unique ID of the car make/model
  carClass: number; // Between 0 (D -- worst cars) and 7 (X class -- best cars) inclusive
  carPerformanceIndex: number; // Between 100 (slowest car) and 999 (fastest car) inclusive
  drivetrainType: number; // Corresponds to EDrivetrainType; 0 = FWD, 1 = RWD, 2 = AWD
  numCylinders: number; //Number of cylinders in the engine
}
