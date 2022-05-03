# qee frontend (JavaScript)

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

## License

Copyright 2019 Marcus Edwards

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
