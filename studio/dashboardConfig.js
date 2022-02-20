export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6211dd11ee4be841d322ef5a',
                  title: 'Sanity Studio',
                  name: 'marketing-tools-discovery-studio',
                  apiId: '3c433418-4aa1-48c6-a3cf-639d45f1fe86'
                },
                {
                  buildHookId: '6211dd1085be32345e0b5d79',
                  title: 'Portfolio Website',
                  name: 'marketing-tools-discovery',
                  apiId: 'cf3d4cc4-63bc-4661-a188-511aa1c374b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/niranjanbala/marketing-tools-discovery',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://marketing-tools-discovery.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
