import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';
import Field from '@/shared/components/Field';
import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import { DataStructures } from '@/databases/domain/types';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

export default function Data() {
  const { addDataStructure } = useActions();

  const {
    dataStructure: selectedDataStructure,
    meanUnitSize: selectedMeanUnitSize,
    maxUnitSize: selectedMaxUnitSize,
    dbSize: selectedDbSize,
    dbSizeGrowth: selectedDbSizeGrowth,
  } = useTypedSelector((state) => state.dataStructure);

  const handleDropdownChange =
    (type: 'dataStructure' | 'supportedDataTypes') =>
    (event: SelectChangeEvent) => {
      const newValue = event.target.value;

      addDataStructure({
        dataStructure: selectedDataStructure,
        meanUnitSize: selectedMeanUnitSize,
        maxUnitSize: selectedMaxUnitSize,
        dbSize: selectedDbSize,
        dbSizeGrowth: selectedDbSizeGrowth,
        [type]: newValue,
      });
    };

  const handleFieldChange =
    (type: 'meanUnitSize' | 'maxUnitSize' | 'dbSize' | 'dbSizeGrowth') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      addDataStructure({
        dataStructure: selectedDataStructure,
        meanUnitSize: selectedMeanUnitSize,
        maxUnitSize: selectedMaxUnitSize,
        dbSize: selectedDbSize,
        dbSizeGrowth: selectedDbSizeGrowth,
        [type]: newValue,
      });
    };

  return (
    <>
      <Dropdown
        multiple={false}
        options={getEnumValues(DataStructures)}
        label='Data Structure'
        handleChange={handleDropdownChange('dataStructure')}
        value={selectedDataStructure}
      />

      <Typography variant='h5'>Unit (Row/Document) Size</Typography>
      <Field
        label='Mean Unit Size (KB)'
        value={selectedMeanUnitSize}
        onChange={handleFieldChange('meanUnitSize')}
      />
      <Field
        label='Max Unit Size (KB)'
        value={selectedMaxUnitSize}
        onChange={handleFieldChange('maxUnitSize')}
      />

      <Typography variant='h5'>DB Size</Typography>
      <Field
        label='DB Size (GB)'
        value={selectedDbSize}
        onChange={handleFieldChange('dbSize')}
      />
      <Field
        label='DB Size Growth per Month (GB)'
        value={selectedDbSizeGrowth}
        onChange={handleFieldChange('dbSizeGrowth')}
      />
    </>
  );
}
