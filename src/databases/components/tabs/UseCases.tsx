import Typography from '@mui/material/Typography';
import * as React from 'react';
import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import { OltpOlap, RPS } from '@/databases/domain/types';
import Checkbox from '@/shared/components/Checkbox';
import Field from '@/shared/components/Field';
import { Grid2 as Grid } from '@mui/material';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

const fieldStyle = { width: 100 };

export default function UseCases() {
  const {
    oltpOlap,
    insertRPS,
    readRPSById,
    readRPSByQuery,
    updateRPS,
    deleteRPS,
    batchProcessingInsert,
    batchProcessingRead,
    batchProcessingUpdate,
    batchProcessingDelete,
    rowSize,
  } = useTypedSelector((state) => state.useCases);

  const { setOltpOlap, setRPS, setBatchProcessing, setRowSize } = useActions();

  return (
    <>
      <Dropdown
        multiple={true}
        options={getEnumValues(OltpOlap)}
        label='OLTP/OLAP'
        value={oltpOlap}
        handleChange={(e) => setOltpOlap(e.target.value)}
      />
      RPS = Rows Per Second
      <Grid container spacing={2}>
        <Grid size={2}>Insert</Grid>
        <Grid size={4}>
          <Dropdown
            small
            options={getEnumValues(RPS)}
            label='RPS'
            value={insertRPS}
            handleChange={(e) => setRPS('insertRPS', e.target.value as RPS)}
          />
        </Grid>
        <Grid size={6}>
          <Checkbox
            label='Batch Processing'
            checked={batchProcessingInsert}
            onChange={(e) =>
              setBatchProcessing('batchProcessingInsert', e.target.checked)
            }
          />
        </Grid>

        <Grid size={2}>Read</Grid>
        <Grid size={4}>
          <Dropdown
            small
            options={getEnumValues(RPS)}
            value={readRPSById}
            label='RPS by Id'
            handleChange={(e) => setRPS('readRPSById', e.target.value as RPS)}
          />
        </Grid>
        <Grid size={6}>
          <Dropdown
            small
            options={getEnumValues(RPS)}
            value={readRPSByQuery}
            label='RPS by Query'
            handleChange={(e) =>
              setRPS('readRPSByQuery', e.target.value as RPS)
            }
          />
          <Field
            label='Row size'
            value={rowSize}
            onChange={(e) => setRowSize(e.target.value)}
            style={fieldStyle}
          />
        </Grid>

        <Grid size={2}>Update</Grid>
        <Grid size={4}>
          <Dropdown
            small
            options={getEnumValues(RPS)}
            value={updateRPS}
            label='RPS'
            handleChange={(e) => setRPS('updateRPS', e.target.value as RPS)}
          />
        </Grid>
        <Grid size={6}>
          <Checkbox
            label='Batch Processing'
            checked={batchProcessingUpdate}
            onChange={(e) =>
              setBatchProcessing('batchProcessingUpdate', e.target.checked)
            }
          />
        </Grid>

        <Grid size={2}>Delete</Grid>
        <Grid size={4}>
          <Dropdown
            small
            options={getEnumValues(RPS)}
            value={deleteRPS}
            label='RPS'
            handleChange={(e) => setRPS('deleteRPS', e.target.value as RPS)}
          />
        </Grid>
        <Grid size={6}>
          <Checkbox
            label='Batch Processing'
            checked={batchProcessingDelete}
            onChange={(e) =>
              setBatchProcessing('batchProcessingDelete', e.target.checked)
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
