# Smirnov School

### Getting Started

Command to install all dependencies

```bash
yarn
```

### Running locally in development mode

Running the application in development mode:

```bash
yarn dev
```

### Building and deploying in production

The command to run the application in production

```bash
yarn build
yarn start
```

### PM2

Running an application using the pm2 process manager:

```bash
pm2 start ecosystem.config.js
```

To manage running processes, you can use the commands:

```bash
pm2 restart nextjs
pm2 reload nextjs
pm2 stop nextjs
pm2 delete nextjs
```

You can monitor running processes with a couple of convenient commands:

```bash
# online monitoring in the terminal screen
pm2 monit

# process list
pm2 list
```

### Build and rebuild application

Application rebuild command

```bash
make build
```

### GraphQL Code Generator

Command to run GraphQL Code Generator

```bash
yarn codegen
```

Command to run GraphQL Code Generator in watch mode

```bash
yarn codegen:watch
```
