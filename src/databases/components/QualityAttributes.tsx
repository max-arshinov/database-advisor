import { SelectChangeEvent } from '@mui/material/Select';
import { getEnumValues } from '@/shared/domain/helpers';
import {
  Availability,
  Interoperability,
  Latencies,
  Maintainability,
  Scalability,
} from '@/databases/domain/types';
import Dropdown from '@/shared/components/Dropdown';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export default function QualityAttributes() {
  const { addQualityAttributes } = useActions();

  const {
    latency: selectedLatency,
    scalability: selectedScalability,
    availability: selectedAvailability,
    maintainability: selectedMaintainability,
    interoperability: selectedInteroperability,
    security: selectedSecurity,
  } = useTypedSelector((state) => state.qualityAttributes);

  const handleChange =
    (
      type:
        | 'latency'
        | 'scalability'
        | 'availability'
        | 'maintainability'
        | 'interoperability'
        | 'security'
    ) =>
    (event: SelectChangeEvent) => {
      const newValue = event.target.value;

      addQualityAttributes({
        ...{
          latency: selectedLatency,
          scalability: selectedScalability,
          availability: selectedAvailability,
          maintainability: selectedMaintainability,
          interoperability: selectedInteroperability,
          security: selectedSecurity,
        },
        [type]: newValue,
      });
    };

  return (
    <>
      <Dropdown
        multiple={false}
        options={getEnumValues(Latencies)}
        label='Latency'
        handleChange={handleChange('latency')}
        value={selectedLatency}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(Scalability)}
        label='Scalability'
        handleChange={handleChange('scalability')}
        value={selectedScalability}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(Availability)}
        label='Availability'
        handleChange={handleChange('availability')}
        value={selectedAvailability}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(Maintainability)}
        label='Maintainability'
        handleChange={handleChange('maintainability')}
        value={selectedMaintainability}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(Interoperability)}
        label='Interoperability'
        handleChange={handleChange('interoperability')}
        value={selectedInteroperability}
      />
      <Dropdown
        multiple={false}
        options={[]}
        label='Security'
        handleChange={handleChange('security')}
        value={selectedSecurity}
      />
    </>
  );
}
