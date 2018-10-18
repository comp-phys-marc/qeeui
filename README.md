# qed emulator frontend (JavaScript)

# Setup

## Clone

```
https://gitlab.com/QuantumEmulator/qedui.git
```

## Instal dependencies

```
npm install
```

# Build

```
npm run build
```

# Run

```
npm start
```

# Deploy

```
cd ..
git clone https://gitlab.com/QuantumEmulator/qeduiprod.git
sudo rm -r qeduiprod/build
mv qedui/build qeduiprod/
cd qeduiprod
git add -A
git commit -m 'update prod build etc.'
git push heroku master
```
