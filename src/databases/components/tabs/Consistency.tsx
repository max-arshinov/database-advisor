import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import { CA, CL, ConsistencyModels } from '@/databases/domain/types';
import { useActions } from '@/hooks/useActions';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const tooltips = {
  consistency: <>TODO</>,
  tradeoffs: (
    <>
      The{' '}
      <a href='https://en.wikipedia.org/wiki/PACELC_theorem'>PACELC theorem</a>{' '}
      is an extension to the CAP theorem. It states that in case of network
      partitioning (P) in a distributed computer system, one has to choose
      between availability (A) and consistency (C) (as per the CAP theorem), but
      else (E), even when the system is running normally in the absence of
      partitions, one has to choose between latency (L) and loss of consistency
      (C).
    </>
  ),
};

export default function Consistency() {
  const { addConsistency } = useActions();

  const {
    consistencyModel: selectedConsistencyModel,
    consistencyLatency: selectedConsistencyLatency,
    consistencyAvailability: selectedConsistencyAvailability,
  } = useTypedSelector((state) => state.consistency);

  const handleChange =
    (
      type:
        | 'consistencyModel'
        | 'consistencyLatency'
        | 'consistencyAvailability'
    ) =>
    (event: SelectChangeEvent) => {
      const newValue = event.target.value;

      addConsistency({
        ...{
          consistencyModel: selectedConsistencyModel,
          consistencyLatency: selectedConsistencyLatency,
          consistencyAvailability: selectedConsistencyAvailability,
        },
        [type]: newValue,
      });
    };

  return (
    <>
      <Dropdown
        multiple={false}
        options={getEnumValues(ConsistencyModels)}
        label='Consistency Model'
        handleChange={handleChange('consistencyModel')}
        value={selectedConsistencyModel}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(CL)}
        label='Consistency/Latency'
        handleChange={handleChange('consistencyLatency')}
        value={selectedConsistencyLatency}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(CA)}
        label='Consistency/Availability'
        handleChange={handleChange('consistencyAvailability')}
        value={selectedConsistencyAvailability}
      />
    </>
  );
}
