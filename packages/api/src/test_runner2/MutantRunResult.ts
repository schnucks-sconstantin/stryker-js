export enum MutantRunStatus {
  Killed = 'killed',
  Survived = 'survived',
  Timeout = 'timeout',
  Error = 'error',
}

export type MutantRunResult = KilledMutantRunResult | SurvivedMutantRunResult | TimeoutMutantRunResult | ErrorMutantRunResult;

export interface TimeoutMutantRunResult {
  status: MutantRunStatus.Timeout;
}

export interface KilledMutantRunResult {
  status: MutantRunStatus.Killed;
  /**
   * The id of the test that killed this mutant
   */
  killedBy: string;
  /**
   * The failure message that was reported by the test
   */
  failureMessage: string;
}

export interface SurvivedMutantRunResult {
  status: MutantRunStatus.Survived;
}

export interface ErrorMutantRunResult {
  status: MutantRunStatus.Error;
  errorMessage: string;
}
