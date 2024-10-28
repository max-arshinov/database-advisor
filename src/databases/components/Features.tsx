import { FormGroup } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import { Transactions } from '@/databases/domain/types';
import Checkbox from '@/shared/components/Checkbox';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export default function Features() {
  const { addFeatures } = useActions();

  const {
    transactions: selectedTransactions,
    // partitioningModel: selectedPartitioningModel,
    // replicationModel: selectedReplicationModel,
    primaryIndexes: selectedPrimaryIndexes,
    secondaryIndexes: selectedSecondaryIndexes,
    ttl: selectedTTL,
    crossDc: selectedCrossDc,
    cdcStreaming: selectedCdcStreaming,
    mapReduce: selectedMapReduce,
    fullTextSearch: selectedFullTextSearch,
    bulkOperations: selectedBulkOperations,
    serverSideScripting: selectedServerSideScripting,
    embeddable: selectedEmbeddable,
    automaticFailover: selectedAutomaticFailover,
  } = useTypedSelector((state) => state.features);

  const handleChange =
    (
      type:
        | 'transactions'
        // | 'partitioningModel'
        // | 'replicationModel'
        | 'primaryIndexes'
        | 'secondaryIndexes'
        | 'ttl'
        | 'crossDc'
        | 'cdcStreaming'
        | 'mapReduce'
        | 'fullTextSearch'
        | 'bulkOperations'
        | 'serverSideScripting'
        | 'embeddable'
        | 'automaticFailover'
    ) =>
    (event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>) => {
      const newValue =
        type === 'primaryIndexes'
          ? !selectedPrimaryIndexes
          : type === 'secondaryIndexes'
          ? !selectedSecondaryIndexes
          : type === 'ttl'
          ? !selectedTTL
          : type === 'crossDc'
          ? !selectedCrossDc
          : type === 'cdcStreaming'
          ? !selectedCdcStreaming
          : type === 'mapReduce'
          ? !selectedMapReduce
          : type === 'fullTextSearch'
          ? !selectedFullTextSearch
          : type === 'bulkOperations'
          ? !selectedBulkOperations
          : type === 'serverSideScripting'
          ? !selectedServerSideScripting
          : type === 'embeddable'
          ? !selectedEmbeddable
          : type === 'automaticFailover'
          ? !selectedAutomaticFailover
          : // For dropdowns, use the new value
            event.target.value;

      addFeatures({
        transactions: selectedTransactions,
        // partitioningModel: selectedPartitioningModel,
        // replicationModel: selectedReplicationModel,
        primaryIndexes: selectedPrimaryIndexes,
        secondaryIndexes: selectedSecondaryIndexes,
        ttl: selectedTTL,
        crossDc: selectedCrossDc,
        cdcStreaming: selectedCdcStreaming,
        mapReduce: selectedMapReduce,
        fullTextSearch: selectedFullTextSearch,
        bulkOperations: selectedBulkOperations,
        serverSideScripting: selectedServerSideScripting,
        embeddable: selectedEmbeddable,
        automaticFailover: selectedAutomaticFailover,
        [type]: newValue,
      });
    };

  return (
    <>
      {/*<Dropdown multiple={true} options={getEnumValues(QueryLanguages)} label="Supported APIs" />*/}
      <Dropdown
        multiple={false}
        options={getEnumValues(Transactions)}
        label='Transactions'
        handleChange={handleChange('transactions')}
        value={selectedTransactions}
      />
      {/* <Dropdown
        multiple={false}
        options={[]}
        label='Partitioning Model'
        handleChange={handleChange('partitioningModel')}
        value={selectedPartitioningModel}
      /> */}
      {/* <Dropdown
        multiple={false}
        options={getEnumValues(Replications)}
        label='Replication Model'
        handleChange={handleChange('replicationModel')}
        value={selectedReplicationModel}
      /> */}
      {/*<Checkbox label="Linear Scalability" />*/}
      <Checkbox
        label='Primary Indexes'
        checked={selectedPrimaryIndexes}
        onChange={handleChange('primaryIndexes')}
      />
      <Checkbox
        label='Secondary Indexes'
        checked={selectedSecondaryIndexes}
        onChange={handleChange('secondaryIndexes')}
      />
      <Checkbox
        label='TTL'
        checked={selectedTTL}
        onChange={handleChange('ttl')}
      />
      <Checkbox
        label='Cross-DC'
        checked={selectedCrossDc}
        onChange={handleChange('crossDc')}
      />
      <Checkbox
        label='CDC/Streaming'
        checked={selectedCdcStreaming}
        onChange={handleChange('cdcStreaming')}
      />
      <Checkbox
        label='Map/Reduce'
        checked={selectedMapReduce}
        onChange={handleChange('mapReduce')}
      />
      <Checkbox
        label='Full-text search'
        checked={selectedFullTextSearch}
        onChange={handleChange('fullTextSearch')}
      />
      <Checkbox
        label='Bulk operations'
        checked={selectedBulkOperations}
        onChange={handleChange('bulkOperations')}
      />
      <Checkbox
        label='Server-side scripting'
        checked={selectedServerSideScripting}
        onChange={handleChange('serverSideScripting')}
      />
      <Checkbox
        label='Embeddable'
        checked={selectedEmbeddable}
        onChange={handleChange('embeddable')}
      />
      <Checkbox
        label='Automatic failover'
        checked={selectedAutomaticFailover}
        onChange={handleChange('automaticFailover')}
      />
    </>
  );

  return (
    <FormGroup>
      <ul>
        <li>Query Language</li>
        <li>Transaction</li>
        <li>Sharding</li>
        <li>Linear Scalability</li>
        <li>Full-text search</li>
        <li>Map/Reduce</li>
        <li>Indexes</li>
        <li>Triggers</li>
        <li>Foreign Keys</li>
        <li>Partitioning/Sharding</li>
        <li>Server-side scripting</li>
        <li>CDC</li>
        <li>bulk operations</li>
        <li> Interoperability/Ecosystem / API</li>
      </ul>
    </FormGroup>
  );
}
