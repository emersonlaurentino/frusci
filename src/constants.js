export const DEV = process.env.NODE_ENV !== 'production';

export const Cache = {
  KEY: DEV ? 'FRUSCI_DEV' : 'FRUSCI_PROD',
};
