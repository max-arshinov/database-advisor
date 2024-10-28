import * as DataStructureCreators from './dataStructure';
import * as ConsistencyCreators from './consistency';
import * as ConstraintsCreators from './constraints';
import * as FeaturesCreators from './features';
import * as QualityAttributesCreators from './qualityAttributes';
import * as UseCasesCreators from './useCases';

export default {
  ...DataStructureCreators,
  ...ConsistencyCreators,
  ...ConstraintsCreators,
  ...FeaturesCreators,
  ...QualityAttributesCreators,
  ...UseCasesCreators,
};
