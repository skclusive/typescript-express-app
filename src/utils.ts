export function delay(timeout: number): Promise<boolean> {
  return new Promise(resolve => setTimeout(resolve, timeout, true));
}
