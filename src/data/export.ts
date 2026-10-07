import { featuredProducts } from './mockData.backup.js';
import fs from 'fs';

fs.writeFileSync('/tmp/products.json', JSON.stringify(featuredProducts, null, 2));
