import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import {
  HostingOptions,
  Licenses,
  PricingModels,
} from '@/databases/domain/types';
import Checkbox from '@/shared/components/Checkbox';
import { SelectChangeEvent } from '@mui/material/Select';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const tooltips = {
  data: '',
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

// https://mui.com/material-ui/react-text-field/
// https://redux.js.org/tutorials/typescript-quick-start
export default function PrimaryInfo() {
  const { addConstraints } = useActions();

  const {
    licence: selectedLicence,
    hostingOption: selectedHostingOption,
    prioritizeManagedCloudServices: selectedPrioritizeManagedCloudServices,
    prioritizeCostEfficientOptions: selectedPrioritizeCostEfficientOptions,
    pricingModel: selectedPricingModel,
    supportedApi: selectedSupportedApi,
  } = useTypedSelector((state) => state.constraints);

  const handleChange =
    (
      type:
        | 'licence'
        | 'hostingOption'
        | 'prioritizeManagedCloudServices'
        | 'prioritizeCostEfficientOptions'
        | 'pricingModel'
        | 'supportedApi'
    ) =>
    (event: SelectChangeEvent) => {
      const newValue =
        type === 'prioritizeManagedCloudServices'
          ? !selectedPrioritizeManagedCloudServices
          : type === 'prioritizeCostEfficientOptions'
          ? !selectedPrioritizeCostEfficientOptions
          : event.target.value;

      addConstraints({
        ...{
          licence: selectedLicence,
          hostingOption: selectedHostingOption,
          prioritizeManagedCloudServices:
            selectedPrioritizeManagedCloudServices,
          prioritizeCostEfficientOptions:
            selectedPrioritizeCostEfficientOptions,
          pricingModel: selectedPricingModel,
          supportedApi: selectedSupportedApi,
        },
        [type]: newValue,
      });
    };

  return (
    <>
      <Dropdown
        multiple={false}
        options={getEnumValues(Licenses)}
        label='License (free or paid)'
        handleChange={handleChange('licence')}
        value={selectedLicence}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(HostingOptions)}
        label='Hosting Options'
        handleChange={handleChange('hostingOption')}
        value={selectedHostingOption}
      />
      <Checkbox
        label='Prioritize Managed Cloud Services'
        checked={selectedPrioritizeManagedCloudServices}
        onChange={handleChange('prioritizeManagedCloudServices')}
      />
      <Checkbox
        label='Prioritize Cost-Efficient Options'
        checked={selectedPrioritizeCostEfficientOptions}
        onChange={handleChange('prioritizeCostEfficientOptions')}
      />
      <Dropdown
        multiple={false}
        options={getEnumValues(PricingModels)}
        label='Pricing Model'
        handleChange={handleChange('pricingModel')}
        value={selectedPricingModel}
      />

      <h3>Supported APIs</h3>
      <Dropdown
        multiple={false}
        options={['someApi1', 'someApi2', 'someApi3']}
        label='API'
        handleChange={handleChange('supportedApi')}
        value={selectedSupportedApi}
      />
      {/* <Dropdown
        multiple={false}
        options={getEnumValues(QueryLanguages)}
        label='Query Language'
        handleChange={handleChange('supportedApi')}
        value={selectedSupportedApi}
      /> */}
    </>
  );
}
