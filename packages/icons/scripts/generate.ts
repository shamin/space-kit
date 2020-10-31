/* eslint-disable quotes */
/*
  This file is inspired from Evergreen by segmentio
  https://github.com/segmentio/evergreen/blob/master/tools/generate-icons.js
*/

import path from 'path';
import fs from 'fs-extra';
import { IconSvgPaths16, IconSvgPaths20 } from '@blueprintjs/icons';
import camelCase from 'camelcase';
import prettier from 'prettier';

const iconsPath = path.resolve(__dirname, '../src/generated');
const iconsIndexPath = path.resolve(__dirname, '../src/index.ts');

async function main() {
  const prettierConfig = await prettier.resolveConfig(__dirname);
  await fs.emptyDir(iconsPath);

  const iconNames = [];

  const promises = Object.keys(IconSvgPaths16).map((name) => {
    const iconName = camelCase(name, { pascalCase: true }) + 'Icon';
    const svgPaths16 = IconSvgPaths16[name];
    const svgPaths20 = IconSvgPaths20[name];
    iconNames.push(iconName);

    let iconFile = `
    import React, { memo, forwardRef } from 'react';
    import { Icon } from '../icon';

    const svgPaths16 = [
      '${svgPaths16.join(`',\n  '`)}'
    ];
    const svgPaths20 = [
      '${svgPaths20.join(`',\n  '`)}'
    ];

    interface IconProps {
      size: number;
    }

    export const ${iconName}: React.FC<IconProps> = memo(
      forwardRef(({ size = 16 }: IconProps, ref) => (
        <Icon size={size} paths={size === 16 ? svgPaths16 : svgPaths20} name="add-column-left" />
      ))
    );
    `;

    const iconPath = path.join(iconsPath, `${iconName}.tsx`);
    iconFile = prettier.format(iconFile, {
      ...prettierConfig,
      filepath: iconPath,
    });

    return fs.writeFile(iconPath, iconFile);
  });
  await Promise.all(promises);

  let iconsIndexFile = iconNames
    .map((iconName) => {
      return `export { ${iconName} } from './generated/${iconName}'`;
    })
    .join('\n');

  iconsIndexFile = prettier.format(iconsIndexFile, {
    ...prettierConfig,
    filepath: iconsIndexPath,
  });

  await fs.writeFile(iconsIndexPath, iconsIndexFile);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
