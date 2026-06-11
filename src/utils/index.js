export const isDev = () => {
  return [
    'development',
  ].includes(process.env.NODE_ENV)
}
