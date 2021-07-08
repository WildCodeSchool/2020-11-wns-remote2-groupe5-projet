import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type ArticleCommunitiesProps = {
  communities: string[];
};

const ArticleCommunities: React.FC<ArticleCommunitiesProps> = ({
  communities,
}) => {
  return (
    <Flex>
      {communities.map((community, index) => (
        <Text
          fontSize={['sm', 'sm', 'md', 'md']}
          fontWeight={900}
          fontStyle="italic"
          pr={'4px'}
          color="white"
          key={index}
        >
          #{community}
        </Text>
      ))}
    </Flex>
  );
};

export default ArticleCommunities;
