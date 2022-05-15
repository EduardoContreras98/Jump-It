
<!-- Modal -->
<div class="modal fade" id="configuración" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body2">

            <div class="form" id="form">
                <h1>Configuración</h1>
                <br>
                <div class="grupo">
                   <button type="button" onclick="cargaSonido('prueba');">↑</button>
                   <button type="button" onclick="MusicaPlay(this);">▷</button>
                   <button type="button" onclick="MusicaPause(this);">┃┃</button>
                   <button type="button" onclick="MusicaReinicio(this);">↶</button>
                   <button type="button" onclick="MusicaStop(this);">▢</button>
                   <button type="button" onclick="eliminaSonido(this);">↓</button>
                   <button type="button" onclick="MusicaCambio('a');">⇄</button>
                   <h4>Volumen</h4>
                   <input type="range" name="VolumenMusic" id="VolumenMusic"  min="0" max="1" step="0.01" value="1" onchange="Volumen(this);">
                </div>
                
                <br> 
                <button type="button" data-bs-dismiss="modal" aria-label="Close">Guardar</button>
            </div>
     

      </div>
      </div>
      
     </div>
</div>