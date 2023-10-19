# LOD-cockpit
dashboard overview of service checks we depend upon
Core idea
---------

-   as we introduce

-   more and more LOD services, e.g.

-   LDES feed of MRG, aphia, marineinfo**

-   linked data publication of the items in those feeds

-   RO-crate stuff: spaces, profiles, registries

-   FAIR-signposting

-   specific REST API calls?

-   external partner services (sparql endpoints van bodc / seadatanet)

-   mime-type support

-   200 ok op spo call

-   github workflow failures

-   clients that depends on those (and on those of others), e.g.

-   html viewers with refs to common-assets

-   we should have a regular check of those being fully operational

-   so doing checks about

-   service accessibility -- general and specific endpoints that should result in 200 OK

-   conneg compliance and conneg listing compliance (content negotiation)

-   syntax compliance

-   shape compliance (shacl)

-   fair signposting

-   cors header settings

-   of LDES feeds, dcat lists, github pages, sparql endpoint, ...

-   and reporting on those

-   unsure about incarnation/cockpit → easy overview of what works and what does not (similar to http://cockpit.vliz.be/)

-   output web page(s) that showing the health of our stuff + link to the original + some obvious message

-   doing a mix of 

-   instant js triggered calls and tests

-   retrieving results from cron-like github-actions

-   ideas:

-   python dashboard -- streamlit?

-   github action running regularly - publishing result pages (html or json) - possibly 

-   client side (in browser js) checks from static published site → tapping into a http-get of a config-list of services it should check

-   server side thing to run on docker

-   combo of all of the above

-   config in the github repo itself (yml?) to describe the kind of tests & parameters to check

Note on existing dashboard repo
-------------------------------

-   there is already a repo for gh-dashboard: (very experimental, was meant as an example of what could be done ) <https://github.com/vliz-be-opsci/github-actions-dashboard>

-   gh-pages don't work anymore since gh implemented 2FA for api, so a rework is  needed: 

-   https://open-science.vliz.be/github-actions-dashboard/

-   warning :: this new idea for 'LOD cockpit'  is broader than only checking up on gh actions ! 

-   the existing dashboard sounds like: report on (our own) gh-action exit status ?

-   the new cockpit is more about: is marineregions still running? is the connect of marineinfo correctly responding, is the BODC sparql endpoint supporting CORS, are the seadatanet services correctly applying content-types, are our ro-crate pages nicely  fair-signposted ? are the shapes of the maregraph projects valid, ...

Notes
-----

-   thoughts during 20231019 meeting

-   we could have multiple setups of this → one for opsci to start with, but maybe later also one for emobon

Concrete list of aspects / dials to visualise / what elements of the config
---------------------------------------------------------------------------

### 1 | LDES

#### things to check

-   200 OK on all requests (starting at entry feed link, following all the pages and the members ) 

-   conneg support → run both over jsonld and ttl)

-   matching mimetypes on all returned representations

-   LINT checking of the content too

-   CORS header check

-   simple sparql execution feedback 

-   e.g. mrg -> count of al MRGObject should be bigger then ?

#### visualisation hint

-   health ok/bad

-   last time checked

-   lastmodified of youngest LDES member change

-   location / report of found error?

#### config draft

-   entry url of feed

-   conneg variants to check

-   limit the amount of pages we traverse

-   shape / property-path to indicate to which level properties need to be dereferenced.  

-   expectations of results on some sparql statements ?

-   shacl shape to check

#### remark:

-   local cockpit incarnation should limit itself to number of pages → the full check should be based on some other system that is doing full ldes syncs

### 2 | topical published LD entities

#### things to check

-   200 OK on all requests

-   CORS header check 

-   conneg support → run both over jsonld and ttl)

-   matching mimetypes on all returned representations

-   LINT checking of the content too

-   shacl shape

#### visualisation hint

-   health ok/bad

-   time checked, (random) ID used 

-   location / report of found error?

#### config draft

-   entity uritemplate + random-id generation constraints?

-   conneg variants to check → or even via the published linkset

-   shacl shape  to check

#### remark:

### 3 | RO Crate Spaces

#### things to check

-   200 OK on all requests to 

-   CORS header check

-   crates and profiles findable 

-   FAIR signposting available

-   preview index findable

-   releases present

-   shacl shape / profile specific validation

-   results of external validators?

#### visualisation hint

-   health ok/bad

-   time checked,

-   location / report of found error?

#### config draft

-   space uri

#### remark:

### 4 | SPARQL Endpoints

#### things to check

-   200 OK on all requests 

-   conneg support → run both over jsonld and ttl

-   CORS header check

-   content-type support 

-   non-empty SPO request

#### visualisation hint

-   health ok/bad

-   time checked, (random) ID used 

-   location / report of found error?

#### config draft

-   sparql endpoint URL

-   http://edan.si.edu/saam/sparql

-   http://vocab.nerc.ac.uk/sparql/sparql

-   https://linked.bodc.ac.uk/sdn/edios/sparql/sparql

-   https://sparql.ifremer.fr/csr/query

-   https://sparql.ifremer.fr/sextant_seadatanet/query

-   https://edmed.seadatanet.org/sparql/sparql

-   https://cdi.seadatanet.org/sparql/sparql

-   https://edmerp.seadatanet.org/sparql/sparql

-   https://edmo.seadatanet.org/sparql/sparql

-   https://csr.seadatanet.org/sparql/sparql

-   per endpoint some sparql statements to check

#### remark:

### 5 | github actions overview

#### things to check

-   did the workflow last run succeed and when was it ran last

#### visualisation hint

#### config draft

-   start with github organisation -- find the repos in there -- and see what actions are running there

#### remark:

-   see existing work

-   see -- (<https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28>)

Next steps
----------

-   uml diagram for 

-   config data

-   results data 

-   component split and working

-   mock up viz 

-   new meeting

-   bram - check if streamlit has static rendering support

-   todo - check LDES client from IMEC (wip)  → <https://github.com/TREEcg/event-stream-client/issues> (wait with this part until their new release)
