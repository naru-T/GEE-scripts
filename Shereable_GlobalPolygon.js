
https://code.earthengine.google.com/5dc421af43c04eafe42266540f17e664

/*
Global country polygons downloaded from rworldmap package in R

rworldmap-package {rworldmap}	R Documentation
https://cran.r-project.org/web/packages/rworldmap/index.html

## from documentation
For mapping global data.

Description
Enables mapping of country level and gridded user datasets by facilitating joining to modern world maps and offering visualisation options. Country borders are derived from Natural Earth data v 1.4.0.

Details

Package:	rworldmap
Type:	Package
Version:	1.3-4
Date:	2014-11-11
##

#what I did
command in R to export shapefiles 
  library(rworldmap)
  library(tmaptools)
  map <- getMap("coarse")
  write_shape(map, "globalmap_rworldmap.shp")

Then upload to GEE
#

Attribution Table information
names(map)
 [1] "ScaleRank"    "LabelRank"    "FeatureCla"   "SOVEREIGNT"   "SOV_A3"       "ADM0_DIF"     "LEVEL"        "TYPE"         "ADMIN"       
[10] "ADM0_A3"      "GEOU_DIF"     "GEOUNIT"      "GU_A3"        "SU_DIF"       "SUBUNIT"      "SU_A3"        "NAME"         "ABBREV"      
[19] "POSTAL"       "NAME_FORMA"   "TERR_"        "NAME_SORT"    "MAP_COLOR"    "POP_EST"      "GDP_MD_EST"   "FIPS_10_"     "ISO_A2"      
[28] "ISO_A3"       "ISO_N3"       "ISO3"         "LON"          "LAT"          "ISO3.1"       "ADMIN.1"      "REGION"       "continent"   
[37] "GEO3major"    "GEO3"         "IMAGE24"      "GLOCAF"       "Stern"        "SRESmajor"    "SRES"         "GBD"          "AVOIDnumeric"
[46] "AVOIDname"    "LDC"          "SID"          "LLDC"        

> head(map@data)
  ScaleRank LabelRank        FeatureCla           SOVEREIGNT SOV_A3 ADM0_DIF LEVEL              TYPE                ADMIN ADM0_A3 GEOU_DIF
1         1         1 Admin-0 countries          Afghanistan    AFG        0     2 Sovereign country          Afghanistan     AFG        0
2         1         1 Admin-0 countries               Angola    AGO        0     2 Sovereign country               Angola     AGO        0
3         1         1 Admin-0 countries              Albania    ALB        0     2 Sovereign country              Albania     ALB        0
4         1         1 Admin-0 countries United Arab Emirates    ARE        0     2 Sovereign country United Arab Emirates     ARE        0
5         1         1 Admin-0 countries            Argentina    ARG        0     2 Sovereign country            Argentina     ARG        0
6         1         1 Admin-0 countries              Armenia    ARM        0     2 Sovereign country              Armenia     ARM        0
               GEOUNIT GU_A3 SU_DIF              SUBUNIT SU_A3                 NAME ABBREV POSTAL                   NAME_FORMA TERR_
1          Afghanistan   AFG      0          Afghanistan   AFG          Afghanistan   Afg.     AF Islamic State of Afghanistan  <NA>
2               Angola   AGO      0               Angola   AGO               Angola   Ang.     AO           Republic of Angola  <NA>
3              Albania   ALB      0              Albania   ALB              Albania   Alb.     AL          Republic of Albania  <NA>
4 United Arab Emirates   ARE      0 United Arab Emirates   ARE United Arab Emirates U.A.E.     AE                         <NA>  <NA>
5            Argentina   ARG      0            Argentina   ARG            Argentina   Arg.     AR           Argentine Republic  <NA>
6              Armenia   ARM      0              Armenia   ARM              Armenia   Arm.    ARM          Republic of Armenia  <NA>
             NAME_SORT MAP_COLOR  POP_EST GDP_MD_EST FIPS_10_ ISO_A2 ISO_A3 ISO_N3 ISO3       LON       LAT ISO3.1              ADMIN.1
1          Afghanistan         7 28400000      22270        0     AF    AFG      4  AFG  66.08669  33.85640    AFG          Afghanistan
2               Angola         1 12799293     110300        0     AO    AGO     24  AGO  17.50291 -12.29155    AGO               Angola
3              Albania         6  3639453      21810        0     AL    ALB      8  ALB  20.03243  41.14135    ALB              Albania
4 United Arab Emirates         3  4798491     184300        0     AE    ARE    784  ARE  54.20671  23.86863    ARE United Arab Emirates
5            Argentina        13 40913584     573900        0     AR    ARG     32  ARG -65.14954 -35.22017    ARG            Argentina
6              Armenia        10  2967004      18770        0     AM    ARM     51  ARM  45.00029  40.21661    ARM              Armenia
         REGION     continent                       GEO3major              GEO3            IMAGE24             GLOCAF          Stern
1          Asia       Eurasia            Asia and the Pacific        South Asia             India+ Rest of South Asia   Central Asia
2        Africa        Africa                          Africa   Southern Africa    Southern Africa Sub-Sarahan Africa South+E Africa
3        Europe       Eurasia                          Europe    Central Europe     Central Europe             Europe         Europe
4          Asia       Eurasia                       West Asia Arabian Peninsula        Middle East        Middle East      West Asia
5 South America South America Latin America and the Caribbean     South America Rest South America   Rest of South Am  South America
6        Europe       Eurasia                          Europe    Eastern Europe            Russia+                FSU         Europe
  SRESmajor                                  SRES                         GBD AVOIDnumeric                AVOIDname   LDC   SID  LLDC
1      ASIA                      South Asia (SAS)                 Asia, South           21     Rest of Central Asia   LDC other  LLDC
2       ALM              Sub-Saharan Africa (AFR) Sub-Saharan Africa, Central           24 Southern and East Africa   LDC other other
3       REF      Central and Eastern Europe (EEU)             Europe, Central           25                   Europe other other other
4       ALM    Middle East and North Africa (MEA)    North Africa/Middle East           30              Middle East other other other
5       ALM Latin America and the Caribbean (LAM)     Latin America, Southern           26            South America other other other
6       REF Newly Independent States of FSU (FSU)               Asia, Central           25                   Europe other other  LLDC


*/
