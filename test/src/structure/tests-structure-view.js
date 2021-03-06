
import StructureView from "../../../src/structure/structure-view.js";
import PdbParser from "../../../src/parser/pdb-parser.js";
import GroParser from "../../../src/parser/gro-parser.js";
import CifParser from "../../../src/parser/cif-parser.js";
import { autoLoad } from "../../../src/loader/loader-utils.js";
import Selection from "../../../src/selection.js";


describe('structure/structure-view', function() {


describe('initialization', function () {
    it('basic selection', function () {
        var path = "../../data/BaceCgProteinAtomistic.pdb";
        return autoLoad( path ).then( function( structure ){
            var selection = new Selection( "10-30" );
            var sview = structure.getView( selection );
            assert.equal( structure.atomStore.count, 774, "Passed!" );
            assert.equal( sview.atomCount, 211, "Passed!" );
        } );
    });

    it('selection with not', function () {
        var path = "../../data/BaceCgProteinAtomistic.pdb";
        return autoLoad( path ).then( function( structure ){
            var selection = new Selection( "not 10-30" );
            var sview = structure.getView( selection );
            assert.equal( structure.atomStore.count, 774, "Passed!" );
            assert.equal( sview.atomCount, 563, "Passed!" );
        } );
    });

    it('selection relying on automatic chain names', function () {
        var path = "../../data/Bace1Trimer-inDPPC.gro";
        return autoLoad( path ).then( function( structure ){
            var selection = new Selection( ":A" );
            var sview = structure.getView( selection );
            assert.equal( structure.atomStore.count, 52661, "Passed!" );
            assert.equal( sview.atomCount, 258, "Passed!" );
        } );
    });

    it('selection with chains', function () {
        var path = "../../data/3SN6.cif";
        return autoLoad( path ).then( function( structure ){
            var selection = new Selection( "30-341:R or 384-394:A" );
            var sview = structure.getView( selection );
            assert.equal( structure.atomStore.count, 10274, "Passed!" );
            assert.equal( sview.atomCount, 2292, "Passed!" );
        } );
    });
});


});
